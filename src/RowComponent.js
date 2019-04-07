import React from 'react'
import styled from 'styled-components'


// const Wrapper = styled.div`
// display: grid;
// grid-gap: 0px;
//     grid-template-columns: 1fr 1fr 1fr;
//     // 
//     background-color: #fff;
//     color: #444;
// `

const Wrapper = styled.div`
grid-template-columns: 40px 50px auto 50px 40px;
grid-template-rows: 25% 100px auto;`

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
const Column4 = styled.div`
    grid-column: col 3 ;
    grid-row:row;
`

const ColumnSpan2 = styled.div`
    grid-column: 2/4;
    grid-row: row 2 ;
`

const RowComponent = ({ itemNr }) =>
    (<Wrapper>
        <Column1>
            <select>
                <option>een</option>
                <option>twee</option>
            </select>
        </Column1>
        <Column2><input type="text" value="col2"></input> </Column2>

        <Column3><input type="text" value="col3"></input></Column3>
        <Column4>ICON todo</Column4>

        {/* <ColumnSpan2> <textarea>Hello coments here</textarea></ColumnSpan2> */}
    </Wrapper>)

export default RowComponent

