import React, { Component } from 'react';
import './App.css';
import {Radio} from './Radio.js'
import {EncryptedText} from './EncryptedText.js'

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {message: "(A message in a bottle)"}
  }


  encrypt = (message) => (
    // parenthesis, shorthand for { return (...)}
    message.replace(/e/gi, "3")
    // replace takes regexp, with Global and case-Insensitive flags
  )

  setMessage = (message) => {
    // do not use 'this.message', or 'this.state.message = message', as UI
    // will not update

    // key without a value, shorthand for {message: message}
    this.setState({message: this.encrypt(message)})
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
