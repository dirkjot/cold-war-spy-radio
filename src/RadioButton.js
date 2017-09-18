import React, { Component } from 'react';
import './Radio.css'

export class RadioButton extends Component {

  render = () => {
    return (
      <label>
        <input type="radio"
          value={this.props.value}
          onClick={event => this.props.onChange(event)}
          checked={this.props.active === this.props.value}/>
        Send Instructions
      </label>)

  }
}
