import React, {useState}from "react";
import "../styles/Card.css";
import ghost from "../photos/120px-Ghost_icon_SwSh.png";
import ghostType from "../photos/120px-GhostIC.png";
import heart from "../photos/akar-icons_heart.png";

const Card = (props) => {
  const {
    name, id, pop, foll, gen,
    alb1,
    alb1Tracks,
    alb2,
    alb2Tracks,
    type
  } = props
  
  console.log(name);
  // const [state, setState] = useState(test)
  // console.log(state);
  // console.log(test.name)
  return (
    <div className={type} id="card">
      <div className="cardComponent1 ">
        <div className="C1-1  ">
          <div className="genre">
            <h2>{gen}</h2>
          </div>
        </div>
        <div className="C1-2 ">
          <h1 className="artistName">{name}</h1>
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
        <img
          src="https://i.scdn.co/image/ab676161000051749e46a78c5cd2f7a8e7669980"
          alt=""
        />
      </div>
      <div className="cardComponent3 ">
        <div className="imgContainer">
          <img src={ghost} alt="ghost type" />
          <img src={ghost} alt="ghost type" />
        </div>
        <h1>{alb1}</h1>
      </div>
      <div className="cardComponent4 ">
        <p>
          {alb1Tracks}
        </p>
      </div>
      <div className="cardComponent5 ">
        <div className="imgContainer">
          <img src={ghost} alt="ghost type" />
          <img src={ghost} alt="ghost type" />
        </div>
        <h1>{alb2}</h1>
      </div>
      <div className="cardComponent6 ">
        <p>
         {alb2Tracks}
        </p>
      </div>
      <div className="cardComponent7 "></div>
      <div className="cardComponent8 ">
        <div className="statsContainer">
          <div className="statsBox">
            <p className="stats">Popularity {pop}/100</p>
          </div>
          <div className="statsBox">
            <p className="stats">Followers {foll}</p>
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
  );
};

export default Card;
