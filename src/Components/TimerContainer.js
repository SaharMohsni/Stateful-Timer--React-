import React, {
    Component
} from 'react';
import TimerView from './TimerView'

class TimerContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            timems: 0,
            intervalId: null
        }
    }    
    timeOn = () => {
        this.setState({
            timems: this.state.timems + 1000
        })
    }
    start = () => {
        if (!this.state.intervalId) {
            const intervalId = setInterval(this.timeOn, 1000) 
            this.setState({intervalId: intervalId})
        }
        else{
            this.pause()
            
        }
    }

    pause = () => {
        clearInterval(this.state.intervalId)
        this.setState({intervalId:null })
        
    }
    reset = () => {
        this.pause()
        this.setState({timems:0})
    }
    startOrPause = () => {
        if(this.state.intervalId) {
            this.pause()
        }
        else {
            this.start()
        }
    }
    render() {
        return (
        <div className="container">
            <TimerView timeValue={this.state.timems} />
            <div className="btns">
                <input  onClick={this.startOrPause} className="btn" type="button" value={this.state.intervalId ? 'Pause' : 'Start'} />
                <input onClick={this.reset} className="btn" type="button" value="Reset" />
            </div>
        </div>   
        ) ;                                                          
    }
}
export default TimerContainer