import React, { Component } from 'react';
import TimerInput from './TimerInput';
import StartButton from './StartButton';

class Timer extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <TimerInput seconds={this.props.seconds} />
        <StartButton shouldStartTimer={this.props.shouldStartTimer} buttonLabel={this.props.buttonLabel} />
      </div>
    );
  }
}

export default Timer;
