import React, { Component } from 'react';
import './Button.css'


class Button extends Component {
  constructor(props) {
    super();

    this.nextHandle = this.nextHandle.bind(this);
  }

  nextHandle = () => {
    alert('próximo pokemon!');
  }

  render() {    

    return (
      <button className="next-button" onClick={this.nextHandle} >Próximo Pokemon</button>
    );
  }
}

export default Button;
