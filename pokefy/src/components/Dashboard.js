import React, { useState } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import '../styles/Dashboard.css'
import Header from './Header'
import NewArtist from './NewArtist'
import NewAlbum from './NewAlbum'


const Dashboard = (props) => {
    const [state, setState] = useState({ artist: "", type: ""})
    const [testData, setTestData] = useState({ artist: "", title: "", imgURL: ""})
    const [guiIndex, setGuiIndex] = useState(0)
    const [arr, setArr] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13])

    const plus = () => {
        switch (guiIndex) {
            case 0:
                setGuiIndex(1)
            break;
            case 1:
                setGuiIndex(2)
            break;
            default:
                setGuiIndex(1)
                break;
        }
    }

    const minus = () => {
        switch (guiIndex) {
            case 0:
                setGuiIndex(2)
            break;
            case 1:
                setGuiIndex(2)
            break;
            default:
                setGuiIndex(1)
                break;
        }
    }

    const cancel = () => {
        setGuiIndex(0)
    }

    const getDrakeInfo = () => {
        console.log(props.token);
        axios(`https://api.spotify.com/v1/search?q=drake&type=album`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + props.token}
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
            headers: { 'Authorization' : 'Bearer ' + props.token}
        }).then(res => {
            setTestData({
               artist: res.data.albums?.items[0].artists[0].name,
               title: res.data.albums.items[0].name,
               imgURL: res.data.albums.items[0].images[0].url })
    })
    }
    return(
        <div>
            <Header name={'Dashboard'}/>
            <div className="dashboard">
                
                { guiIndex === 1 && <NewArtist cancel={cancel} plus={plus} minus={minus}/>}
                { guiIndex === 2 && <NewAlbum cancel={cancel} plus={plus} minus={minus}/>}

                <div className="cardContainer border">
                    <div className="grid-item1" onClick={() => setGuiIndex(1)}></div>
                    {arr.map((el, ind) => {
                        return <div className="grid-item" key={ind}>{el}</div>
                    })}
                    
                </div>

            </div>
        </div>
    )
}
function mapStateToProps(state){
    return {...state.token}
}

export default connect(mapStateToProps)(Dashboard)


// Welcome to the homepage
//                 <button onClick={() => getDrakeInfo()}>Get Drake Info</button>
            
//                     <input type="text" placeholder="artist" onChange={e => setState({ artist: e.target.value, type: state.type })}/>
//                     <input type="text" placeholder="type" onChange={e => setState({ artist: state.artist, type: e.target.value })}/>
//                     <button onClick={search}>Submit</button>
//                 <h1>{testData.artist}</h1>
//                 <h2>{testData.title}</h2>
//                 <img src={testData.imgURL} alt={testData.title} />