import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RowComponent from './RowComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
       <RowComponent></RowComponent>
      </div>
    );
  }
}

export default App;
