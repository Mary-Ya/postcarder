import React from 'react';
import './App.css';
import url from './services/url';

import Textbox from './components/Textbox/Textbox';

const App = React.createClass({
  getInitialState() {
    const params = url.getParams();
    return {stringInput: params};
  },

  handleChange(e) {
    url.setParams(e.target.value);
    this.setState({stringInput: e.target.value});
  },

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
});

export default App;
