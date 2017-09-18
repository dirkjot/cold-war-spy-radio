import React, { Component } from 'react';
import './Radio.css'
export class Radio extends Component {

  constructor (props) {
    super(props)
    this.state = { activeRadio: undefined }
  }

  radioChanged = event => {
    if (event.target.value !== this.state.activeRadio) {
      console.log(event.target.value)
      this.setState({activeRadio: event.target.value}) }
  }

  render = () => {
    return (
      <form>
        <label>
          <input type="radio"
            value="send-instructions"
            onClick={event => this.radioChanged(event)}
            checked={this.state.activeRadio === "send-instructions"}/>
          Send Instructions</label>
        <label>
          <input type="radio"
            value="document-dropped"
              onClick={event => this.radioChanged(event)}
            checked={this.state.activeRadio === "document-dropped"}/>
          Document dropped</label>
        <label>
          <input type="radio"
            value="more-money"
              onClick={event => this.radioChanged(event)}
            checked={this.state.activeRadio === "more-money"}/>
          Send more money</label>
      </form>)
  }
}
