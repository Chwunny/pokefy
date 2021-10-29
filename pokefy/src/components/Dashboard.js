import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import '../styles/Dashboard.css'
import Header from './Header'
import NewArtist from './NewArtist'
import NewAlbum from './NewAlbum'
import Card from './Card'
import plusIcon from '../photos/plus.png'

const Dashboard = (props) => {
    const [guiIndex, setGuiIndex] = useState(0)
    const [count, setCount] = useState(0)
    const [cardData, setCardData] = useState([])

    useEffect(() => {
        axios.post('/user/cards').then(res => {
            setCardData(res.data)
        })
    },[count])

    const handleCount = () => {
        setCount(count+1)
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

    
    return(
        <div>
            <Header name={'Dashboard'}/>
            <div className="dashboard">
                
                { guiIndex === 1 && <NewArtist cancel={cancel} plus={plus} minus={minus} updateData={handleCount}/>}
                { guiIndex === 2 && <NewAlbum cancel={cancel} plus={plus} minus={minus}/>}

                <div className="cardContainer ">
                    <div className="grid-item1" onClick={() => setGuiIndex(1)}>
                        <img className="plusIcon" src={plusIcon} alt="Add a new card" />
                    </div>

                    {cardData.map((el, idx) => {
                        return <Card 
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

                </div>

            </div>
        </div>
    )
}
function mapStateToProps(state){
    return {...state.token}
}

export default connect(mapStateToProps)(Dashboard)
