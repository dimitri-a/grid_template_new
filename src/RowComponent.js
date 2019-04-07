import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
display: grid;
grid-template-columns: 150px  150px  150px 30px;
grid-template-rows: auto auto; /* changed */
border: solid 1px #000000;
grid-gap: 10px; /* grid gap to handle spaces between items if needed */
padding: 5px; /* space between wrapper and grid items */
`;

const Column1 = styled.div`grid-column: 1/2; background-color:yellow`;
const Column2 = styled.div`grid-column: 2/3; background-color:yellow`;
const Column3 = styled.div`grid-column: 3/4; background-color:yellow`;
const Column4 = styled.div`grid-column: 4/5; background-color:yellow`;
const ColumnSpan2 = styled.div`
	grid-column: 2/ span 2;
    grid-row: 2; /* changed */

`;


const RowComponent = ({ itemNr }) => (
	<Wrapper>
		<Column1 >
			<select>
				<option>een</option>
				<option>twee</option>
			</select>
		</Column1>
		<Column2 >
			<input type="text" value="col2" />{' '}
		</Column2>
		<Column3 >
			<input type="text" value="col3" />{' '}
		</Column3>
		<Column4 >todo iceon </Column4>
		<ColumnSpan2>
			{' '}
			<textarea>Hello coments here</textarea>
		</ColumnSpan2>
	</Wrapper>
);

export default RowComponent;
