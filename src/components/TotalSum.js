import React, { Component } from 'react';
import '../css/TotalSum.css';

class TotalSum extends Component {
  render() {
    return (
      <div className="TotalSum">
        <p>Total Sum: {this.props.totalSum}</p>
      </div>
    )
  }
}

export default TotalSum;
