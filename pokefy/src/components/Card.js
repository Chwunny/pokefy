import React from 'react'
import '../styles/Card.css'
import ghost from '../photos/120px-Ghost_icon_SwSh.png'
import ghostType from '../photos/120px-GhostIC.png'
import heart from '../photos/akar-icons_heart.png'

const Card = (props) => {
    return (
        <div className="card  ">
            <div className="cardComponent1 ">
                <div className="C1-1  ">
                    <div className="genre">
                        <h2>Punk</h2>
                    </div>
                </div>
                <div className="C1-2 ">
                    <h1 className="artistName">Drake</h1>
                    <div className="hp">
                        <h4>HP</h4>
                        <h1>120</h1>
                    </div>
                </div>
                <div className="C1-3 ">
                    <img src={ghost} alt="ghost type" />
                </div>
            </div>
            <div className="cardComponent2 ">
                <img src="https://i.scdn.co/image/ab676161000051749e46a78c5cd2f7a8e7669980" alt="" />
            </div>
            <div className="cardComponent3 ">
                <div className="imgContainer">
                    <img src={ghost} alt="ghost type" />
                    <img src={ghost} alt="ghost type" />
                </div>
                <h1>Certified Lover Boy</h1>
            </div>
            <div className="cardComponent4 ">
                <p>Way 2 Sexy, Fair Trade, Knife Talk, Girls Want Girls, Champagne Poetry,
                Papi’s Home</p>
            </div>
            <div className="cardComponent5 ">
                <div className="imgContainer">
                        <img src={ghost} alt="ghost type" />
                        <img src={ghost} alt="ghost type" />
                    </div>
                    <h1>Dark Lane Demo Tapes</h1>
                </div>
            <div className="cardComponent6 ">
                <p>When to Say When, Deep Pockets, Chicago Freestyle, Not You Too,
                Toosie Slide, Time Flies</p>
            </div>
            <div className="cardComponent7 ">
                
            </div>
            <div className="cardComponent8 ">
                <div className="statsContainer">
                    <div className="statsBox">
                        <p className="stats">Popularity 100/100</p>
                    </div>
                    <div className="statsBox">
                        <p className="stats">Followers 5,555,555</p>
                    </div>
                </div>
                <div className="picContainer ">
                    <div className="pic">
                        <img src={ghostType} alt="ghost type" />
                    </div>
                    <div className="heart ">
                        <img src={heart} alt="heart" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
