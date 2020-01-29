import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    dataSet: [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5],
    input: 'Enter number here',
    output: null
  }

  linearSearch = (arr, input) => {
    console.log(arr, input);
    let counter = 0;
    for (let i =0; i < arr.length; i++) {
      counter++;
      if (arr[i] === parseInt(input)) {
        return `${input} found! it took ${counter} attempts`;
      }
    }
    return `No matching value, took ${counter} attempts`
  }
  

  handleLinear = (event) => {
    event.preventDefault();
    const newOutput = this.linearSearch(this.state.dataSet, this.state.input);
    this.setState({
      output: newOutput,
      input: 'Enter number here'
    })
  }

  handleInput = (event) => {
    this.setState({
      input: event.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <h1>React UI Drill</h1>
        <form>
          <label htmlFor='input'></label>
          <input type='text' id='input' value={this.state.input} onChange={this.handleInput}/>
          <button onClick={ev => this.handleLinear(ev)}>Linear</button>
          <button onClick={ev => this.handleBinary(ev)}>Binary</button>
        </form>
        <div className='output'>
          <p>{this.state.output}</p>
        </div>
      </div>
    );
  }
}

export default App;
