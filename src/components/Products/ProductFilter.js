import React, { Component } from 'react'

export default class ProductFilter extends Component {

  checkBoxChange = (event) => {
    if (event.target.checked) {
      this.props.onFilterChange(event.target.value)
    } else {
      this.props.onFilterChange('')
    }
  }

  render() {
    return (
      <div>
        <label htmlFor="wood">Wood</label>
        <input id="wood" type="checkbox" value="Wood" onChange={(e) => this.checkBoxChange(e)}/>
        <label htmlFor="metal">Metal</label>
        <input id="metal" type="checkbox" value="Metal" onChange={(e) => this.checkBoxChange(e)}/>
      </div>
    )
  }
}
