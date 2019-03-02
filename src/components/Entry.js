import React, { Component } from 'react';

class Entry extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <p>{this.props.text} event</p>
        <button onClick={() => this.props.removeEvent(this.props.slot)}>Remove button</button>
      </div>
    )
  }
}

export default Entry;

