import React, { Component } from 'react';
import './EachComponent.css';

class EachComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      componentSum: 0,
    }
    this.addSum = this.addSum.bind(this);
    this.removeComponent = this.removeComponent.bind(this);
  }

  addSum() {
    this.setState({
      componentSum: this.state.componentSum + 1
    })
    this.props.addToTotal();
  }

  removeComponent() {
    this.props.subtractFromTotal(this.state.componentSum);
    this.props.removeComponent(this.props.slot);
  }

  render() {
    return (
      <div className="EachComponent">
        <p>{this.props.text || "Component"}</p>
        <button onClick={() => this.addSum() }>Total: {this.state.componentSum}</button>
        <button onClick={() => this.removeComponent() }>Remove component</button>
      </div>
    )
  }
}

export default EachComponent;
