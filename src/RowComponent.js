import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
display: grid;
grid-gap: 12px;
    grid-template-columns: [col] 220px [col] 220px [col] 220px ;
    grid-template-rows: [row] 50px [row] 50px [row] ;
    background-color: #fff;
    color: #444;
`

const Column1 = styled.div`
    grid-column: col 1 ;
    grid-row:row;
`
const Column2 = styled.div`
    grid-column: col 2 ;
    grid-row:row;
`
const Column3 = styled.div`
    grid-column: col 3 ;
    grid-row:row;
`

const ColumnSpan2 = styled.div`
    grid-column: 2/4;
    grid-row: row 2 ;
`

const RowComponent = ({itemNr}) =>
    (<Wrapper>
        <Column1>
            <select>
                <option>een</option>
                <option>twee</option>
            </select>
        </Column1>
        <Column2><input type="text" value={itemNr}></input> </Column2>

        <Column3><input type="text" value="col3"></input></Column3>

        <ColumnSpan2> <textarea>Hello coments here</textarea></ColumnSpan2>
    </Wrapper>)

export default RowComponent

