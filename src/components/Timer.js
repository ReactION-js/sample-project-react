import React, { Component } from 'react';
import TimerInput from './TimerInput';
import StartButton from './StartButton';
import './Timer.css';

class Timer extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="Timer">
        <TimerInput seconds={this.props.seconds} />
        <StartButton shouldStartTimer={this.props.shouldStartTimer} buttonLabel={this.props.buttonLabel} />
      </div>
    );
  }
}

export default Timer;
