import React, { Component } from 'react';
import './TotalSum.css';

class TotalSum extends Component {
  render() {
    return (
      <div className="TotalSum">
        Total Sum: {this.props.totalSum}
      </div>
    )
  }
}

export default TotalSum;
