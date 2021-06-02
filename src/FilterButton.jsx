import React, { Component } from 'react';
import './FilterButton.css';

class FilterButton extends Component {
  render() {
    const { type, handle } = this.props;

    return (
      <button className="filter-button" onClick={handle}>{ type }</button>
    )
  }
}

export default FilterButton;
