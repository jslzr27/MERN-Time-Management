import React, { Component, Fragment } from 'react';
import { Button } from '@material-ui/core';
import LogActivity from '../Logger';
import "./style.css";

export default class Stopwatch extends Component {
constructor(props) {
    super(props);
    this.state = { secondsElapsed: 0 };
    }

getSeconds = () => {
    return ("0" + this.state.secondsElapsed % 60).slice(-2);
}

getMinutes = () => {
    return Math.floor(this.state.secondsElapsed / 60);
}

getHours = () => {
    return Math.floor(this.state.getSeconds / 3600);
}

handleStartClick = () => {
    const _this = this
    this.incrementer = setInterval(function (){
        _this.setState({
            secondsElapsed: (_this.state.secondsElapsed + 1)
        }); 
     }, 1000)
}

handlePauseClick = () => {
    clearInterval(this.incrementer);
    this.setState({lastClearedIncrementer: this.incrementer});
}

handleStopClick = () => {
    this.setState({ secondsElapsed: 0 });
}

handleLogClick = () => {
    alert("..starting");
}

  render() {
    return (
    <div>
      <Fragment className="stopwatch">
          <h1 className="stopwatch-timer">{this.getHours()}:{this.getMinutes()}:{this.getSeconds()}</h1>

          {(this.state.secondsElapsed === 0 || this.incrementer === this.state.lastClearedIncrementer) 
          ? <Btn onClick={this.handleStartClick}>Start</Btn>

          : <Btn onClick={this.handlePauseClick}>Pause</Btn>
          } 
        {(this.state.secondsElapsed !== 0)
        ? <Btn onClick={this.handleStopClick}>Stop</Btn> 
        : null  
    }
          <br></br>    
          {/* <Button onClick={this.handleLogClick}>Log your Time</Button> */}
          <LogActivity /> 
      </Fragment>
      </div>
    )
  }
}

class Btn extends Component {
    render() {
        return (
            <Button {...this.props} className={"btn " + this.props.className} />
        )
    }
}