import React from 'react';
import '../css/EachComponent.css';

const EachComponent = ({ slot, componentSum, text, removeComponent, addToTotal }) => {

  return (
    <div className="EachComponent">
      <p>{text || "Component"}</p>
      <button onClick={() => addToTotal(slot)}>Total: {componentSum}</button>
      <button onClick={() => removeComponent(slot, componentSum)}>Remove component</button>
    </div>
  )
}

export default EachComponent;
