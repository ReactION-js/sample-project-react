import React, { Component } from 'react';
import Entry from './Entry';

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: ''
    }
    this.handleInput=this.handleInput.bind(this);
  }
  handleInput(e) {
    this.setState({
      val: e.target.value
    })
  }
  render() {
    const events = this.props.events;
    const arr = events.map((el, id) => <Entry key={id} slot={id} text={el} removeEvent={this.props.removeEvent}/>)
    return (
      <div>
        TEST <br/>
        <input onChange={this.handleInput}></input>
        <button onClick={() => this.props.addEvent(this.state.val)}>Add Event</button>
        {arr}
      </div>
    )
  }
}

export default Event;