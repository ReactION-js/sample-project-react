import React, { Component } from 'react';
import './App.css';
import AddComponent from './AddComponent';
import TotalSum from './TotalSum';
import localImg from '../ReactION-logo.png';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      componentsArray: [],
      totalSum: 0,
    }
    this.addComponent = this.addComponent.bind(this);
    this.removeComponent = this.removeComponent.bind(this);
    this.addToTotal = this.addToTotal.bind(this);
    this.subtractFromTotal = this.subtractFromTotal.bind(this);
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
        <AddComponent events={this.state.componentsArray} addComponent={this.addComponent} removeComponent={this.removeComponent} addToTotal={this.addToTotal} subtractFromTotal={this.subtractFromTotal}/>
      </div>
    );
  }
}

export default App;
