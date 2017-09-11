import React, { Component } from 'react';
import './App.css';

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
        // this is NOT how you should do radios in react, it seems to work but
        // will fail when you click button 1, 2, then 1 again.
        <div  onChange={event => this.radioChanged(event)}>
          <input type="radio" value="send-instructions" name="message"/> Send Instructions
          <input type="radio" value="document-dropped" name="message"/> Document dropped
          <input type="radio" value="more-money" name="message"/> Send more money
        </div>
      </div>
    );
  }
}

export default App;
