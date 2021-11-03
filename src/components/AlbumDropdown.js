import React from 'react'

const AlbumDropdown = (props) => {
    const {data, handleChange}= props
    return (
        <>
            <select className="guiInput" onChange={(e) => handleChange(e)}>
                <option value="">Select album</option>
                {data.map((item, index) => <option key={index} value={[ item.name, item.id, item.images[0].url ]} >{item.name} by {item.artists[0].name}</option>)}
            </select>
        
        </>
    )
}

export default AlbumDropdown
