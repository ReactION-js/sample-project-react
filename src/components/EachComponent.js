import React, { Component } from 'react';
import './EachComponent.css';

class EachComponent extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="EachComponent">
        <p>{this.props.text} Component</p>
        <button onClick={() => this.props.removeComponent(this.props.slot)}>Remove component</button>
      </div>
    )
  }
}

export default EachComponent;

