import React, { Component } from 'react';
import './NextButton.css';

class NextButton extends Component {
  render() {
    const handle = this.props.handle;

    return (
      <button className="next-button" onClick={handle} >Próximo Pokemon</button>
    );
  }
}

export default NextButton;
