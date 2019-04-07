import React from 'react';
import styled from 'styled-components';
import {Wrapper,Column1,Column2,Column3,Column4,ColumnSpan2} from './Styles'


const RowComponent = ({ itemNr }) => (
	<Wrapper>
       
		<Column1>
			<select>
				<option>een</option>
				<option>twee</option>
			</select>
		</Column1>
		<Column2>
			<input type="text" value="col2" />{' '}
		</Column2>
		<Column3>
			<input type="text" value="col3" />{' '}
		</Column3>
		<Column4>todo iceon </Column4>
		<ColumnSpan2>
			{' '}
			<textarea>Hello coments here</textarea>
		</ColumnSpan2>
	</Wrapper>
);

export default RowComponent;
