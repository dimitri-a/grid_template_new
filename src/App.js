import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RowComponent from './RowComponent';


class App extends Component {

  constructor(props){
super(props);
this.state={items:[1,3,4,5]}
  }

  addRow=() => {
    debugger
    this.state.items.push(5)
  }
  render() {
    
    return (
      <div className="App">
      {this.state.items.map(i => <RowComponent itemNr={i}></RowComponent>)}
       <button onClick={() => this.addRow()}>Click here</button>
      </div>
    );
  }
}

export default App;
