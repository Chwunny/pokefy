import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import '../styles/Dashboard.css'
import Header from './Header'
import NewArtist from './NewArtist'
import NewAlbum from './NewAlbum'
import ArtistCard from './ArtistCard'
import plusIcon from '../photos/plus.png'
import AlbumCard from './AlbumCard'

const Dashboard = (props) => {
    const [guiIndex, setGuiIndex] = useState(0)
    const [count, setCount] = useState(0)
    const [ArtistCardData, setArtistCardData] = useState([])
    const [albumCardData, setAlbumCardData] = useState([])
    const [loading, setLoading] = useState(true)

    const nameInAplhabetical = (a, b) => {
        
        const nameA = a.name? a.name.toUpperCase() : a.artist_name.toUpperCase()
        const nameB = b.name? b.name.toUpperCase() : b.artist_name.toUpperCase()
    
        let comparison = 0;
      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      }
      return comparison;
    }
 
    useEffect(() => {
        (async function getCardData(){
            await axios.post('/user/artist/cards').then(res => {
                setArtistCardData(res.data.sort(nameInAplhabetical))
            })
            await axios.post('/user/album/cards').then(res => {
                setAlbumCardData(res.data.sort(nameInAplhabetical))
            })
            setTimeout(() => {
                setLoading(false)
            }, 1000)
        })()
    },[count])

    const handleCount = () => {
        setCount(count+1)
    }

    const createCardDelay = () => {
        setCount(count+1)
        setLoading(true)
    }
    
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
    
    if (loading){
        return(
            <div className="App loadingScreen">
                <div className="loadingContainer">
                    <h1>Loading</h1>
                    <div className="dot-container">
                        <div className="dot-falling"></div>
                    </div>
                </div>
            </div>
        )
    } else {
    return(
        <div>
            <nav className="mobile-placeholder"></nav>
            <Header name={'Dashboard'} history={props.history}/>
            <div className="dashboard">
                
                { guiIndex === 1 && <NewArtist cancel={cancel} plus={plus} minus={minus} updateData={handleCount} createCardDelay={createCardDelay}/>}
                { guiIndex === 2 && <NewAlbum cancel={cancel} plus={plus} minus={minus} updateData={handleCount} createCardDelay={createCardDelay}/>}

                <div className="cardContainer ">
                    <div className="grid-item1" onClick={() => setGuiIndex(1)}>
                        <img className="plusIcon" src={plusIcon} alt="Add a new card" />
                    </div>

                    {ArtistCardData.map((el, idx) => {
                        return <ArtistCard 
                        key={idx} cardId={el.id} name={el.name} image={el.image_url} artistId={el.artist_id} pop={el.popularity} foll={el.followers} gen={el.genre}
                        alb1={el.album_1}
                        alb1Tracks={el.alb1_tracks}
                        alb2={el.album_2}
                        alb2Tracks={el.alb2_tracks}
                        type={el.card_type}
                        fav={el.favorite}
                        updateData={handleCount}
                        />
                    })}

                    {albumCardData.map((el, idx) => {
                        return <AlbumCard 
                        key={idx} cardId={el.id} artistName={el.artist_name} image={el.image_url} genre={el.genre} pop={el.popularity} releaseDate={el.release_date}
                        albumName={el.album_name}
                        albumTracks={el.alb_tracks}
                        type={el.card_type}
                        fav={el.favorite}
                        updateData={handleCount}
                        />
                    })}

                </div>

            </div>
        </div>
    )
                }
}
function mapStateToProps(state){
    return {...state.token}
}

export default connect(mapStateToProps)(Dashboard)
