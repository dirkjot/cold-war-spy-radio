import React, { Component } from 'react';
import './App.css';
import {Radio} from './Radio.js'
import {EncryptedText} from './EncryptedText.js'

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {message: "(A message in a bottle)"}
  }

  setMessage = (message) => {
    // do not use this.message, or this.state.message=message, as UI
    // will not update
    this.setState({message})
    // key without a value, shorthand for {message: message}
  }

  radioChanged = event => {
    console.log(event.target.value)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">

          <h2>The Cold War Radio</h2>
        </div>
        <Radio setter={this.setMessage}/>
        <EncryptedText text={this.state.message} />
      </div>
    );
  }
}

export default App;
