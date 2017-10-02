import React, { Component } from 'react';
import {RadioButton} from './RadioButton.js'
import './Radio.css'

export class Radio extends Component {

  constructor (props) {
    super(props)
    this.state = { activeRadio: this.props.activeRadio }
  }

  radioChanged = event => {
    if (event.target.value !== this.state.activeRadio) {
      console.log(event.target.value)
      this.setState({activeRadio: event.target.value})
      this.props.setter(event.target.value)}
  }

  render = () => {
    return (
      <form>
        <RadioButton value="Send Instructions" text="Send Instructions"
          active={this.state.activeRadio} onChange={this.radioChanged} />
        <RadioButton value="Document dropped" text="Document dropped"
          active={this.state.activeRadio} onChange={this.radioChanged}/>
        <RadioButton value="Send more money" text="Send more money"
          active={this.state.activeRadio} onChange={this.radioChanged}/>
      </form>)
  }
}
