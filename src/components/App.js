import React, { Component } from 'react';
import './App.css';
import Timer from './Timer';
import AddComponent from './AddComponent';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      seconds: 0,
      shouldStartTimer: false,
      buttonLabel: 'Off',
      componentsArray: [],

    }
    this.shouldStartTimer = this.shouldStartTimer.bind(this);
    this.buttonLabel = this.buttonLabel.bind(this);
    this.handleSeconds = this.handleSeconds.bind(this);
    this.handleInterval = null;
    this.addComponent = this.addComponent.bind(this);
    this.removeComponent = this.removeComponent.bind(this);

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

  addComponent(val) {
    this.setState({
      componentsArray: [...this.state.componentsArray, val]
    })
  }

  removeComponent(id) {
    console.log(this.state.componentsArray)
    const arr = this.state.componentsArray;
    const newArray = arr.filter((el, idx) => idx !== id);
    this.setState({
      componentsArray: newArray
    })
  }


  render() {
    return (

      <div className="App">
        Sample React App for ProjectX!
        <Timer seconds={this.state.seconds} shouldStartTimer={this.shouldStartTimer} buttonLabel={this.state.buttonLabel} />
        <AddComponent events={this.state.componentsArray} addComponent={this.addComponent} removeComponent={this.removeComponent}/>
      </div>
    );
  }
}

export default App;
