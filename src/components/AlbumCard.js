import React from "react";
import axios from "axios";
import { connect } from "react-redux";

import deleteBtn from '../photos/delete-svgrepo-com.svg'

import "../styles/Card.css";
import ghost from "../photos/120px-Ghost_icon_SwSh.png";
import electric from "../photos/Electric_icon_SwSh.png"
import dark from "../photos/Dark_icon_SwSh.png"
import psychic from "../photos/120px-Psychic_icon_SwSh.png"
import steel from "../photos/120px-Steel_icon_SwSh.png"
import water from "../photos/120px-Water_icon_SwSh.png"
import fire from "../photos/Fire_icon_SwSh.png"
import normal from "../photos/120px-Normal_icon_SwSh.png"
import grass from "../photos/120px-Grass_icon_SwSh.png"
import fighting from "../photos/120px-Fighting_icon_SwSh.png"

import ghostType from "../photos/120px-GhostIC.png";
import electricType from "../photos/120px-ElectricIC.png"
import darkType from "../photos/DarkIC.png"
import psychicType from "../photos/120px-PsychicIC.png"
import steelType from "../photos/120px-SteelIC.png"
import waterType from "../photos/120px-WaterIC.png"
import fireType from "../photos/120px-FireIC.png"
import normalType from "../photos/120px-NormalIC.png"
import grassType from "../photos/120px-GrassIC.png"
import fightingType from "../photos/120px-FightingIC.png"

import heart from "../photos/akar-icons_heart.png";
import favHeart from "../photos/heart-svgrepo-com.svg"


const AlbumCard = (props) => {

  const {
    cardId,
    artistName,
    image,
    genre,
    pop,
    releaseDate,
    albumName,
    albumTracks,
    type,
    fav
  } = props

  let img1;
  let img2;
  let alt;

  switch (type) {
    case "ghost":
      img1 = ghost
      img2 = ghostType
      alt = "Ghost type icon"
      break;
    case "electric":
      img1 = electric
      img2 = electricType
      alt = "Electric type icon"
      break;
    case "dark":
      img1 = dark
      img2 = darkType
      alt = "Dark type icon"
      break;
    case "psychic":
      img1 = psychic
      img2 = psychicType
      alt = "Psychic type icon"
      break;
    case "steel":
      img1 = steel
      img2 = steelType
      alt = "Steel type icon"
      break;
    case "water":
      img1 = water
      img2 = waterType
      alt = "Water type icon"
      break;
    case "fire":
      img1 = fire
      img2 = fireType
      alt = "Fire type icon"
      break;
    case "normal":
      img1 = normal
      img2 = normalType
      alt = "Normal type icon"
      break;
    case "grass":
      img1 = grass
      img2 = grassType
      alt = "Grass type icon"
      break;
    case "fighting":
      img1 = fighting
      img2 = fightingType
      alt = "Fighting type icon"
      break;
    default:
      img1 = normal
      img2 = normalType
      alt = "Normal type icon"
      break;
  }

  const deleteCard = async () => {
    await axios.delete('/user/delete/album/card', { data: {cardId: cardId} }).then(res => {
      props.updateData()
    })
  }

  const updateFavorite = async () => {
    await axios.put('/user/favorite/album/card', {cardId: cardId}).then(res => {
      props.updateData()
    })
  }

  return (
    <div className={type} id="card">
      <div className="cardComponent1 ">
        <div className="C1-1  ">
          <div className="genre">
            <h2>{genre}</h2>
          </div>
        </div>
        <div className="C1-2 ">
          <h1 className="artistName">{artistName}</h1>
          <div className="hp">
            <h4>HP</h4>
            <h1>120</h1>
          </div>
        </div>
        <div className="C1-3 ">
          <img src={img1} alt="ghost type" />
        </div>
      </div>
      <div className="cardComponent2 ">
        <img
          src={image}
          alt="Artist"
        />
      </div>
      <div className="cardComponent3 ">
        <div className="imgContainer">
          <img src={img1} alt={alt} />
          <img src={img1} alt={alt} />
        </div>
        <h1>{albumName}</h1>
      </div>
      <div className="albumCardComponent4 ">
        <p>
          {albumTracks}
        </p>
      </div>
      <div className="cardComponent7 "></div>
      <div className="cardComponent8 ">
        <div className="statsContainer">
          <div className="statsBox">
            <p className="stats">Popularity {pop}/100</p>
          </div>
          <div className="statsBox">
            <p className="stats">Release Date: {releaseDate}</p>
          </div>
        </div>
        <div className="picContainer1 ">
          <div className="pic">
            <img src={img2} alt={alt} />
          </div>
          
          <div className="picContainer2">
            <div className="delete" onClick={deleteCard}>
              <img src={deleteBtn} alt="Delete" />
            </div>
            
            <div className="heart " onClick={updateFavorite}>
              {fav ? <img src={favHeart} alt="heart" /> : <img src={heart} alt="heart"/>}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state){
  return {...state.token}
}

export default connect(mapStateToProps)(AlbumCard)