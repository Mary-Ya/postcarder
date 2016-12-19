import React from 'react';
import './App.css';

import url from './services/url';
import TextBox from './components/Textbox/Textbox';

const App = React.createClass({
  getInitialState() {
    /**
     * Set initial state with search query string
     * @return {object} - state object
     */

    const params = url.getQuery();
    return {stringInput: params};
  },

  handleChange(e) {
    /**
     * Set initial state with search query string
     * @param {object} - click event
     */

    url.setQuery(e.target.value);
    this.setState({stringInput: e.target.value});
  },

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Enter some nice words here</h2>
          <input onChange={this.handleChange} value={this.state.stringInput} />
        </div>
        <TextBox stringInput={this.state.stringInput} />
      </div>
    );
  }
});

export default App;
