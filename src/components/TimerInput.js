import React, { Component } from 'react';

class TimerInput extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        TIMER<br/>
        Seconds: {this.props.seconds}

      </div>
    )
  }
}

export default TimerInput;
