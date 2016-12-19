import React, { Component } from 'react';
import './App.css';
import url from './services/url';

import Textbox from './components/Textbox/Textbox';

class App extends Component {
  constructor(props) {
    super(props);
    const params = url.getParams();
    this.handleChange = this.handleChange.bind(this);
    this.state = {stringInput: params};
  }

  handleChange(e) {
    this.setState({stringInput: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Enter congrats</h2>
          <input onChange={this.handleChange} value={this.state.stringInput} />
        </div>
        <Textbox stringInput={this.state.stringInput} />
      </div>
    );
  }
}

export default App;
