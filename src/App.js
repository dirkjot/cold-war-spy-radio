import React, { Component } from 'react';
import './App.css';
import {Radio} from './Radio.js'
import {EncryptedText} from './EncryptedText.js'

class App extends Component {

  radioChanged = event => {
    console.log(event.target.value)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">

          <h2>The Cold War Radio</h2>
        </div>
       <Radio/>
       <EncryptedText text="A message in a bottle" />
      </div>
    );
  }
}

export default App;
