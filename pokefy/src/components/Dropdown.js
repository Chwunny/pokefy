import React, {useState} from 'react'

const Dropdown = (props) => {
    const { handleChange, data, number} = props

    
    return (
        <div>
            <select onChange={(e) => handleChange(e)}>
                <option value="">Select album {number}</option>
                {data.map((item, index) => <option key={index} value={[ item.name, item.id ]} >{item.name}</option>)}
            </select>
        
        </div>
    )
}

export default Dropdown
