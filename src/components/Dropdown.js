import React from 'react'

const Dropdown = (props) => {
    const { handleChange, data, number} = props

    
    return (
        <>
            <select className="guiInput" onChange={(e) => handleChange(e)}>
                <option value="">Select album {number}</option>
                {data.map((item, index) => <option key={index} value={[ item.name, item.id ]} >{item.name}</option>)}
            </select>
        
        </>
    )
}

export default Dropdown
