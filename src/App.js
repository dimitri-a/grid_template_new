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
			<hr></hr>
			<Wrapper>	
				<Column1>adjust ebitda bold</Column1>
				<Column2>$100000</Column2>
				<Column3>$10000</Column3>
				<Column1>adjusted ebitda(assessed) bold</Column1>
				<Column2>-</Column2>
				<Column3></Column3>
				<Column1>adjusted ebitda(manual input) bold</Column1>
				<Column2></Column2>
				<Column3>todo inputgroyp</Column3>
			</Wrapper>
			
			</div>
		);
	}
}

export default App;
