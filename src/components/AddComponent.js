import React, { Component } from 'react';
import EachComponent from './EachComponent';
import './AddComponent.css';

class AddComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: ''
    }
    this.handleInput=this.handleInput.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({
      val: e.target.value
    })
  }

  handleSubmit(e) {
    this.props.addComponent(this.state.val);
    this.setState({
      val: ''
    })
  }

  render() {
    const events = this.props.events;
    const arr = events.map((el, id) => <EachComponent key={id} slot={id} text={el} removeComponent={this.props.removeComponent}/>)
    return (
      <div className="AddComponent">
        Click to add a component!<br/>
        <input onChange={this.handleInput} placeholder="component name" value={this.state.val} ref={input => input && input.focus()} ></input>
        <button onClick={this.handleSubmit}>Add Component</button>
        <div className="componentWrapper">{arr}</div>
      </div>
    )
  }
}

export default AddComponent;