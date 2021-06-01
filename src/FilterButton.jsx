import React, { Component } from 'react';
import './FilterButton.css';

class FilterButton extends Component {
  render() {
    const { type } = this.props;

    return (
      <button className="filter-button">{ type }</button>
    )
  }
}

export default FilterButton;
