import styled from 'styled-components'

export const  Wrapper = styled.div`
display:grid
grid-template-columns: 1fr 1fr 1fr 30px;
grid-template-rows:auto auto auto;
border: solid 1px 	#000000
grid-gap:10px;
padding:5px
`;

export const  Column1 = styled.div`grid-column: 1/2;`;
export const  Column2 = styled.div`grid-column: 2/3;`;
export const  Column3 = styled.div`grid-column: 3/4;`;
export const  Column4 = styled.div`grid-column: 4/5;`;
export const  ColumnSpan2 = styled.div`
	grid-column: 2/4;
	grid-row: 2;
`;