import React, { useState } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import Dropdown from './Dropdown'
import ArtistDropdown from './ArtistDropdown'


const TestAPI = (props) => {
    const [data, setData] = useState([])
    const [selected, setSelected] = useState({})
    const [idIndex, setIdIndex] = useState(0)
    const [albumRes, setAlbumRes] = useState([])
    const [album1, setAlbum1] = useState([])
    const [album1Tracks, setAlbum1Tracks] = useState([])
    const [album2, setAlbum2] = useState([])
    const [album2Tracks, setAlbum2Tracks] = useState([])

    const handleChange = async (e) => {
        // console.log(name, id);
        let val = e.target.value.split(",")
        console.log(val[0]);
        console.log(val[1]);
        console.log(val[2])
        console.log(val[3])
        console.log(val[4])
        console.log(val[5])
        setSelected({ name: val[0], id: val[1], popularity: val[2], followers: val[3], genre: val[4] })
   
        axios(`https://api.spotify.com/v1/artists/${val[1]}/albums`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + props.token}
        }).then(res => {
            setAlbumRes(res.data.items)
            console.log(res.data.items);
        })
    }
    

    const handleAlbum1Change = (e) => {
        let val = e.target.value.split(",")
        console.log(val[0]);
        console.log(val[1]);

        setAlbum1({ name: val[0], id: val[1]})
        
        axios(`https://api.spotify.com/v1/albums/${val[1]}/tracks`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + props.token}
        }).then(res => {
            res.data.items.forEach((el, index) => {
                if (index <= 6){
                    setAlbum1Tracks(data => [...data, el.name])
                }
                
            })
            console.log(res.data.items);
        })
        
    }

    const handleAlbum2Change = (e) => {
        let val = e.target.value.split(",")
        console.log(val[0]);
        console.log(val[1]);

        setAlbum2({ name: val[0], id: val[1]})
        
        axios(`https://api.spotify.com/v1/albums/${val[1]}/tracks`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + props.token}
        }).then(res => {
            res.data.items.forEach((el, index) => {
                if (index <= 6){
                    setAlbum2Tracks(data => [...data, el.name])
                }
                
            })
            console.log(res.data.items);
        })
        
    }


    const getDrakeInfo = () => {
        axios(`https://api.spotify.com/v1/search?q=drake&type=artist&offset=0&limit=10`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + props.token}
        }).then(drakeRes => {
            setData(drakeRes.data.artists.items)
            console.log(drakeRes.data.artists.items);
        })
    }

    const search = () => {
        axios(`https://api.spotify.com/v1/search?q=drake&type=artist&offset=0&limit=10`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + props.token}
        }).then(res => {
            console.log(res.data);
        })  
    }

    const getAlbums = () => {
        axios(`https://api.spotify.com/v1/artists/${data[idIndex].id}/albums`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + props.token}
        }).then(res => {
            setAlbumRes(res.data.items)
            console.log(res.data.items)
        })
    }

    const getTracks = () => {
        axios(`https://api.spotify.com/v1/artists/${data[idIndex].id}/albums`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + props.token}
        }).then(res => {
            setAlbum1Tracks(res.data.items)
            console.log(res.data.items)
        })
    }

    const checkData = () => {
        console.log("Artist, id: ", selected);
        console.log("Album one data: ", album1);
        console.log("Album one tracks: ", album1Tracks);
        console.log("Album two data: ", album2);
        console.log("Album two tracks: ", album2Tracks);
    }
    return (
        <div className="App">
            This is the test page
            <button onClick={getDrakeInfo}>Drake Info</button>
            <button onClick={search} >Search</button>
            <ArtistDropdown data={data} handleChange={handleChange} />
            <Dropdown data={albumRes} handleChange={handleAlbum1Change} number={"one"} />
            {typeof album1 === "object" && <Dropdown data={albumRes} handleChange={handleAlbum2Change} number={"two"}/>}
            <button onClick={checkData}>Check current data</button>
        </div>
    )
}

function mapStateToProps(state){
    return {...state.token}
}

export default connect(mapStateToProps)(TestAPI)
