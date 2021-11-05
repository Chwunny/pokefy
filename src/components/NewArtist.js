import React, {useState} from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
import ArtistDropdown from './ArtistDropdown';
import Dropdown from './Dropdown';
import '../styles/NewArtist.css'

const NewArtist = (props) => {
    let lArrow = "\u003C";
    let rArrow = "\u003E";

    //Data manipulation state
    const [data, setData] = useState([])
    const [selected, setSelected] = useState({})
    const [albumRes, setAlbumRes] = useState([])
    const [album1, setAlbum1] = useState([])
    const [album1Tracks, setAlbum1Tracks] = useState([])
    const [album2, setAlbum2] = useState([])
    const [album2Tracks, setAlbum2Tracks] = useState([])
    const [type, setType] = useState({type: ""})


    const search = (val) => {
        if (val.length > 2){
            axios(`https://api.spotify.com/v1/search?q=${val}&type=artist&offset=0&limit=10`, {
                method: 'GET',
                headers: { 'Authorization' : 'Bearer ' + props.token}
            }).then(res => {
                setData(res.data.artists.items)
            })
        }
    }

    const handleChange = async (e) => {
        let val = e.target.value.split(",")
        setSelected({ name: val[0], id: val[1], popularity: val[2], followers: val[3], genre: val[4], images: val[5] })
        axios(`https://api.spotify.com/v1/artists/${val[1]}/albums`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + props.token}
        }).then(res => {
            setAlbumRes(res.data.items)
        })
    }

    const handleAlbum1Change = (e) => {
        let val = e.target.value.split(",")

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
        })
        
    }

    const handleAlbum2Change = (e) => {
        let val = e.target.value.split(",")

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
        })
        
    }

    const selectType = (e) => {
        setType({type: e.target.value});
    }


    const create = async () => {
        await axios.post('/user/create/artist', {
            name: selected.name,
            image: selected.images,
            artist_id: selected.id,
            genre: selected.genre,
            popularity: selected.popularity,
            followers: selected.followers,
            album_1: album1,
            alb1_tracks: album1Tracks.join(", "),
            album_2: album2,
            alb2_tracks: album2Tracks.join(", "),
            card_type: type
        }).then(res => console.log(res.data))

        props.createCardDelay()
        props.cancel()
        
    }


    return (
        <>
            <div className="cardGui ">
                    <div className="guiItem1">
                        <h3>Create a new Artist card</h3>
                    </div>

                    <div className="middleBlock">
                    <div className="arrowL" onClick={props.minus}>{lArrow}</div>
                        <div className="guiItem2 guiForm">
                            <input type="text" className="guiInput " placeholder="Artist" onChange={(e) => search(e.target.value)}/>
                            { data.length > 0 && <ArtistDropdown data={data} handleChange={handleChange} />}
                            <Dropdown data={albumRes} handleChange={handleAlbum1Change} number={"one"} />
                            {typeof album1 === "object" && <Dropdown data={albumRes} handleChange={handleAlbum2Change} number={"two"}/>}
                            
                                <select name="type" className="guiInput" id="type" onChange={selectType} >
                                    <option value="">Select a type</option>
                                    <option value="dark">Dark</option>
                                    <option value="electric">Electric</option>
                                    <option value="psychic">Psychic</option>
                                    <option value="steel">Steel</option>
                                    <option value="water">Water</option>
                                    <option value="fire">Fire</option>
                                    <option value="normal">Normal</option>
                                    <option value="ghost">Ghost</option>
                                    <option value="grass">Grass</option>
                                    <option value="fighting">Fighting</option>
                                </select>
                          
                        </div>
                        <div className="arrowR" onClick={props.plus}>{rArrow}</div>
                    </div>


                    <div className="guiItem3">
                        <button className="guiBtn cancel" onClick={props.cancel}>
                            Cancel
                        </button>
                        <button className="guiBtn create" onClick={create}>
                            Create
                        </button>
                    </div>
                </div>
        </>
    )
}

function mapStateToProps(state){
    return {...state.token}
}

export default connect(mapStateToProps)(NewArtist)