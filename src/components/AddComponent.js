import React, { Component } from 'react';
import EachComponent from './EachComponent';
import '../css/AddComponent.css';

class AddComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleInput(e) {
    this.setState({
      val: e.target.value
    })
  }

  handleSubmit() {
    this.props.addComponent(this.state.val);
    this.setState({
      val: ''
    })
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.handleSubmit();
    }
  }

  render() {
    const events = this.props.events;
    const arr = events.map((el, id) => <EachComponent key={id} slot={id} text={el.name} componentSum={el.num} removeComponent={this.props.removeComponent} addToTotal={this.props.addToTotal} />);
    return (
      <div className="AddComponent">
        <h3>Click to add a component!</h3>
          <div className="inputField">
            <input onChange={this.handleInput} onKeyPress={this.handleKeyPress} placeholder="component name" value={this.state.val} ref={input => input && input.focus()}></input>
            <button onClick={this.handleSubmit}>Add Component</button>
          </div>
        <div className="componentWrapper">{arr}</div>
      </div>
    )
  }
}

export default AddComponent;
