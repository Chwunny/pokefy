import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Dashboard = () => {
    const [token, setToken] = useState("fake")
    const [state, setState] = useState({ artist: "", type: ""})
    const [testData, setTestData] = useState({ artist: "", title: "", imgURL: ""})

    useEffect(() => {
        axios.post('/auth/token').then(res => {
            setToken(res.data)
        })
    }, [])

    const getDrakeInfo = () => {
        axios(`https://api.spotify.com/v1/search?q=drake&type=album`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        }).then(drakeRes => {
            setTestData({ 
                artist: drakeRes.data.albums.items[0].artists[0].name,
                title: drakeRes.data.albums.items[0].name,
                imgURL: drakeRes.data.albums.items[0].images[0].url })
        })
    }

    const search = () => {
        axios(`https://api.spotify.com/v1/search?q=${state.artist}&type=${state.type}`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        }).then(res => {
            setTestData({
               artist: res.data.albums?.items[0].artists[0].name,
               title: res.data.albums.items[0].name,
               imgURL: res.data.albums.items[0].images[0].url })
    })
    }
    return (
        <div>
            Welcome to the homepage
            <button onClick={() => getDrakeInfo(token)}>Get Drake Info</button>

            
                <input type="text" placeholder="artist" onChange={e => setState({ artist: e.target.value, type: state.type })}/>
                <input type="text" placeholder="type" onChange={e => setState({ artist: state.artist, type: e.target.value })}/>
                <button onClick={search}>Submit</button>

            <h1>{testData.artist}</h1>
            <h2>{testData.title}</h2>
            <img src={testData.imgURL} alt={testData.title} />
        </div>
    )
}


export default Dashboard
