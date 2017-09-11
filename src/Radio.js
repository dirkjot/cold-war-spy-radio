import React, { Component } from 'react';
import './Radio.css'
export class Radio extends Component {

  radioChanged = event => {
    console.log(event.target.value)
  }

  render = () => {
    return (
      <div  onChange={event => this.radioChanged(event)}>
        // this is NOT how you should do radios in react, it seems to work but
        // will fail when you click button 1, 2, then 1 again.
        <p><input type="radio" value="send-instructions" name="message"/> Send Instructions</p>
        <p><input type="radio" value="document-dropped" name="message"/> Document dropped</p>
        <p><input type="radio" value="more-money" name="message"/> Send more money</p>
      </div>)
  }
}
