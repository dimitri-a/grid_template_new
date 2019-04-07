import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RowComponent from './RowComponent';
import {Wrapper,Column1,Column2,Column3,Column4,ColumnSpan2,RightAlign,Column2Header,Column3Header} from './Styles'


class App extends Component {
	constructor(props) {
		super(props);
		this.state = { items: [ 1, 3, 4, 5 ] };
	}
	addRow = () => {
		debugger;
		this.state.items.push(5);
	};
	render() {
		return (
			<div className="App">
			<Wrapper>	
				<Column2>header 1 </Column2>
				<Column3>header 2</Column3>	
			</Wrapper>
				{this.state.items.map((i) => <RowComponent itemNr={i} />)}
				<button onClick={() => this.addRow()}>Click here</button>
			</div>
		);
	}
}

export default App;
