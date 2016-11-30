import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {strings: []};
  }

  handleChange(e) {
    const src = e.target.value;
    let length = Math.round(Math.sqrt(src.length));
    length = length < 1 ? 1 : length;
    this.setState({strings: src.match(new RegExp('.{1,' + length + '}', 'g')) || []});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Enter congrats</h2>
          <input onChange={this.handleChange} value={this.state.text} />
        </div>
        <div className='congrats'>
          {this.state.strings.map((str, i) => (<div className='congrats__inner' key={'str' + i}>{str}</div>))}
        </div>
      </div>
    );
  }
}

export default App;
