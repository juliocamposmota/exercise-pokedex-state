import React, { Component } from 'react';
import './NextButton.css';

class NextButton extends Component {
  render() {
    const nextHandle = this.props.handle;

    return (
      <button className="next-button" onClick={nextHandle} >Próximo Pokemon</button>
    );
  }
}

export default NextButton;
