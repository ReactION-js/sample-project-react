import React, { Component } from 'react';
import './App.css';
import Timer from './Timer';
import Event from './Event';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      seconds: 0,
      shouldStartTimer: false,
      buttonLabel: 'Off',
      eventsArray: [],

    }
    this.shouldStartTimer = this.shouldStartTimer.bind(this);
    this.buttonLabel = this.buttonLabel.bind(this);
    this.handleSeconds = this.handleSeconds.bind(this);
    this.handleInterval = null;
    this.addEvent = this.addEvent.bind(this);
    this.removeEvent = this.removeEvent.bind(this);

  }

  shouldStartTimer(e) {
    e.preventDefault();
    this.setState ({
      shouldStartTimer: !this.state.shouldStartTimer,
    })
    this.buttonLabel();
    this.handleSeconds();
  }



  buttonLabel() {
    if (this.state.shouldStartTimer) {
      this.setState({
        buttonLabel: 'On',
      })
    } else {
      this.setState({
        buttonLabel: 'Off',
      })
    }
  }

  handleSeconds() {
      if (this.state.shouldStartTimer) {
        this.handleInterval = setInterval(() => {
          this.setState({
            seconds: this.state.seconds + 1,
          })
        }, 1000)
      } else {
        clearInterval(this.handleInterval);
      }
  }

  addEvent(val) {
    this.setState({
      eventsArray: [...this.state.eventsArray, val]
    })
    // console.log(this.state.eventsArray)
  }

  removeEvent(id) {
    console.log(this.state.eventsArray)
    const arr = this.state.eventsArray;
    const newArray = arr.filter((el, idx) => idx !== id);
    this.setState({
      eventsArray: newArray
    })
  }


  render() {
    return (

      <div className="App">
        <Timer seconds={this.state.seconds} shouldStartTimer={this.shouldStartTimer} buttonLabel={this.state.buttonLabel} />
        <Event events={this.state.eventsArray} addEvent={this.addEvent} removeEvent={this.removeEvent}/>


      </div>
    );
  }
}

export default App;
