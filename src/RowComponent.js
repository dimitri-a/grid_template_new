import React from 'react'
const RowComponent = () =>

    (<div className="wrapper">
        <div className="box a1"><select>
            <option>een</option>
            <option>twee</option>
        </select></div>
        <div className="box a2"><input type="text"></input></div>
        <div className="box a3"><input type="text"></input></div>
        <div className="box b1">colspan 2 rowspan 2</div>

        <div className="box a1r3"><select>
            <option>een</option>
            <option>twee</option>
        </select></div>
        <div className="box a2r3"><input type="text"></input></div>
        <div className="box a3r3"><input type="text"></input></div>
        <div className="box b1r3">colspan 2 second row</div>
    </div>)

export default RowComponent

