import React, { useState } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import '../styles/Dashboard.css'
import Header from './Header'
import NewArtist from './NewArtist'
import NewAlbum from './NewAlbum'
import Card from './Card'

const Dashboard = (props) => {
    const [guiIndex, setGuiIndex] = useState(0)
    const [arr, setArr] = useState([1,2,3,4,5,6,7,8,])
    const [testCard, setTestCard] = useState([
        [{ name: 'Drake', id: '3TVXtAsR1Inumwj472S9r4', popularity: '100', followers: '58030368', genre: 'canadian hip hop'},
        {name: 'Certified Lover Boy', id: '3SpBlxme9WbeQdI9kx7KAV'},
        ['Champagne Poetry', 'Papi’s Home', 'Girls Want Girls (with Lil Baby)', 'In The Bible (with Lil Durk & Giveon)', 'Love All (with JAY-Z)', 'Fair Trade (with Travis Scott)', 'Way 2 Sexy (with Future & Young Thug)'],
        {name: 'Dark Lane Demo Tapes', id: '6OQ9gBfg5EXeNAEwGSs6jK'},
        ['Deep Pockets', 'When To Say When', 'Chicago Freestyle (feat. Giveon)', 'Not You Too (feat. Chris Brown)', 'Toosie Slide', 'Desires (with Future)', 'Time Flies'],
        {type: 'normal'}],
        [{ name: 'Drake', id: '3TVXtAsR1Inumwj472S9r4', popularity: '78', followers: '58,030,368', genre: 'hip hop'},
        {name: 'Certified Lover Boy', id: '3SpBlxme9WbeQdI9kx7KAV'},
        ['Champagne Poetry', 'Papi’s Home', 'Girls Want Girls (with Lil Baby)', 'In The Bible (with Lil Durk & Giveon)', 'Love All (with JAY-Z)', 'Fair Trade (with Travis Scott)', 'Way 2 Sexy (with Future & Young Thug)'],
        {name: 'Dark Lane Demo Tapes', id: '6OQ9gBfg5EXeNAEwGSs6jK'},
        ['Deep Pockets', 'When To Say When', 'Chicago Freestyle (feat. Giveon)', 'Not You Too (feat. Chris Brown)', 'Toosie Slide', 'Desires (with Future)', 'Time Flies'],
        {type: 'psychic'}]
    ])

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
                
                { guiIndex === 1 && <NewArtist cancel={cancel} plus={plus} minus={minus}/>}
                { guiIndex === 2 && <NewAlbum cancel={cancel} plus={plus} minus={minus}/>}

                <div className="cardContainer border">
                    <div className="grid-item1" onClick={() => setGuiIndex(1)}></div>

                    {/* {arr.map((el, ind) => {
                        return el > 6 ? <div className="grid-item" key={ind}>{el}</div> : <Card key={ind}/>
                    })} */}
                    {testCard.map((el, idx) => {
                        return <Card 
                        key={idx} name={el[0].name} id={el[0].id} pop={el[0].popularity} foll={el[0].followers} gen={el[0].genre}
                        alb1={el[1].name}
                        alb1Tracks={el[2]}
                        alb2={el[3].name}
                        alb2Tracks={el[4]}
                        type={el[5].type}
                        />
                    })}
                    {/* <Card /> */}
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