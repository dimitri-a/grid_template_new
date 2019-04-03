import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RowComponent from './RowComponent';

class App extends Component {
  render() {
    let items =[1,2,3,4,5]
    return (
      <div className="App">
      {items.map(i => <RowComponent></RowComponent>)}
       <button>Click here</button>
      </div>
    );
  }
}

export default App;
