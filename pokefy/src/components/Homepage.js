import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Homepage = () => {
    const [token, setToken] = useState("")
    const [testAlbum, setTestAlbum] = useState({ artist: "", title: "", imgURL: ""})

    useEffect(() => {
        axios.post('/auth/token').then(res => {
            console.log(res.data);
            setToken(res.data)
        })
    }, [])
    const getDrakeInfo = () => {
        axios('https://api.spotify.com/v1/search?q=drake&type=album', {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        }).then(drakeRes => {
            console.log(drakeRes);
            console.log(drakeRes.data);
            setTestAlbum({ artist: drakeRes.data.albums.items[0].artists[0].name, title: drakeRes.data.albums.items[0].name, imgURL: drakeRes.data.albums.items[0].images[0].url })
        })
    }
    return (
        <div>
            Welcome to the homepage
            <button onClick={getDrakeInfo}>Get Drake Info</button>
            <h1>{testAlbum.artist}</h1>
            <h2>{testAlbum.title}</h2>
            <img src={testAlbum.imgURL} alt={testAlbum.title} />
        </div>
    )
}

export default Homepage
