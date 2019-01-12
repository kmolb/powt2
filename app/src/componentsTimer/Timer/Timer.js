import React, { Component, Fragment } from 'react';
import './Timer.css';
import Button from './../Button'

class Timer extends Component{
  constructor(props){
    super(props);
    this.state = {
      time: 0,
    }
  }

  start = () => {
    if(this.interval){
      return;
    }
  
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        time: prevState.time + 50
      }))
    }, 50);
  }

  reset = () => {
    this.setState({
      time: 0
    })
  }

  stop = () => {
    clearInterval(this.interval);
    delete this.interval;
  }

  render(){
    const { time } = this.state; 

    return <div>
      <div>{time}</div>
      <Button action={this.start} type="primary">start</Button>
      <Button action={this.stop} type="error">stop</Button>
      <Button action={this.reset} type="error">reset</Button>
    </div>
  }
}
export default Timer;
