import React, { Component } from 'react';
import './App.css';
import Timer from './Timer';
import AddComponent from './AddComponent';
import TotalSum from './TotalSum';
import localImg from '../ReactION-logo.png';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      seconds: 0,
      shouldStartTimer: false,
      buttonLabel: 'Off',
      componentsArray: [],
      totalSum: 0,
    }
    this.shouldStartTimer = this.shouldStartTimer.bind(this);
    this.buttonLabel = this.buttonLabel.bind(this);
    this.handleSeconds = this.handleSeconds.bind(this);
    this.handleInterval = null;
    this.addComponent = this.addComponent.bind(this);
    this.removeComponent = this.removeComponent.bind(this);
    this.addToTotal = this.addToTotal.bind(this);
    this.subtractFromTotal = this.subtractFromTotal.bind(this);
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

  removeComponent(slot) {
    const arr = this.state.componentsArray;
    const newArray = arr.filter((el, idx) => idx !== slot);
    this.setState({
      componentsArray: newArray
    })
  }

  subtractFromTotal(val) {
    this.setState({
      totalSum: this.state.totalSum - val,
    })
  }

  addToTotal() {
    this.setState({
      totalSum: this.state.totalSum + 1
    })
  }

  render() {
    return (

      <div className="App">
        <img src={localImg} alt="Sample React App for ReactION"></img>
        <TotalSum totalSum={this.state.totalSum} />
        <Timer seconds={this.state.seconds} shouldStartTimer={this.shouldStartTimer} buttonLabel={this.state.buttonLabel} />
        <AddComponent events={this.state.componentsArray} addComponent={this.addComponent} removeComponent={this.removeComponent} addToTotal={this.addToTotal} subtractFromTotal={this.subtractFromTotal}/>
      </div>
    );
  }
}

export default App;
