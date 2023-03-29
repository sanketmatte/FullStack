import React from "react";
class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            timeremaining : 0,
            countdown : false,
            interval : null,
        }

    }

    startTimer = () =>{
        let hours, minutes, seconds;
        hours = parseInt(document.getElementById("hour").value)
        minutes = parseInt(document.getElementById("minute").value)
        seconds = parseInt(document.getElementById("second").value)

        var total_time = hours*60*60 +minutes*60 +seconds;
        const interval = setInterval(this.reduceTime, 1000)
        this.setState({
            timeremaining:total_time,
            countdown :true,
            interval : interval
        })    
    }

    reduceTime = () =>{
        if(this.state.timeremaining === 0){
            this.setState({
                countdown: false,
            })
            alert("timesup")
            clearInterval(this.state.interval)
        }
        if(this.state.countdown){
            this.setState({
                timeremaining: this.state.timeremaining - 1,
            })
        }
        
    }

    resetTimer = () => {
        clearInterval(this.state.interval)
        this.setState({
            timeremaining:0,
            countdown : false,
            interval:null
        })
    }
    pauseTimer = () => {
        this.setState({
            countdown: !this.state.countdown,
        })         
    }

    render(){
        return(
            <div>
                <h1>This is Timer Application</h1>
                <h3>Enter the time to countdown</h3>
                <label>
                    <input type="number" id = "hour" ></input> 
                    Hour            
                    <input type="number" id = "minute"></input> 
                    Minutes
                    <input type="number" id = "second"></input> 
                    Seconds
                </label>
                <br></br>
                <br></br>
                <button onClick={this.startTimer}>Start Timer</button>
                <button onClick={this.resetTimer}>Reset Timer</button>
                <button onClick={this.pauseTimer}>Pause / Resume Timer</button>
                <h1>Time Remaining : {this.state.timeremaining} seconds</h1>

            </div>        
        )
    }
}

export default Timer;

