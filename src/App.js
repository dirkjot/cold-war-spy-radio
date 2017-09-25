import React, { Component } from 'react';
import './App.css';
import RadioContainer from './RadioContainer.js'
import EncryptedTextContainer from './EncryptedTextContainer.js'

class App extends Component {


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>The Cold War Radio</h2>
        </div>
        <RadioContainer/>
        <EncryptedTextContainer  />
      </div>
    );
  }
}

export default App;
