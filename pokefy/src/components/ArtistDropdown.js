import React from 'react'

const ArtistDropdown = (props) => {
    const { handleChange, data} = props

    return (
        <div>
            <select onChange={(e) => handleChange(e)}>
                <option value="">Select an Artist</option>
                {data.map((item, index) => <option key={index} value={[ item.name, item.id, item.popularity, item.followers.total, item.genres[0], item.images[0]
                 ]} >{item.name}</option>)}
            </select>
            
        </div>
    )
}

export default ArtistDropdown
