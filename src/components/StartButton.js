import React, { Component } from 'react';

class StartButton extends Component {
  constructor(props){
    super(props);
  }

  render() {
    
    return (
      <div>
        <button onClick={this.props.shouldStartTimer}>{this.props.buttonLabel}</button>
      </div>
    )
  }
}

export default StartButton;