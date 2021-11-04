import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import AlbumDropdown from "./AlbumDropdown";

const NewAlbum = (props) => {
  let lArrow = "\u003C";
  let rArrow = "\u003E";

  const [data, setData] = useState([]);
  const [albumData, setAlbumData] = useState({});
  const [albTracks, setAlbTracks] = useState("")
  const [type, setType] = useState("");

  const search = (val) => {
    if (val.length > 2) {
      axios(
        `https://api.spotify.com/v1/search?q=${val}&type=album&offset=0&limit=10`,
        {
          method: "GET",
          headers: { Authorization: "Bearer " + props.token },
        }
      ).then((res) => {
        setData(res.data.albums.items);
      });
    }
  };

  const handleChange = async (e) => {
    let val = e.target.value.split(",");
    axios(`https://api.spotify.com/v1/albums/${val[1]}/`, { // val[1] is the album id received from the dropdown
      method: "GET",
      headers: { Authorization: "Bearer " + props.token },
    }).then((res) => {
        console.log(res.data);
      const {
        artists,
        id,
        images,
        name,
        popularity,
        release_date,
        tracks,

      } = res.data;

      axios(`https://api.spotify.com/v1/artists/${artists[0].id}`, {
        method: "GET",
        headers: { Authorization: "Bearer " + props.token },
      }).then((genreRes) => {
        setAlbumData({
          artistName: artists[0].name,
          artistId: artists[0].id,
          albumName: name,
          albumId: id,
          image: images[0].url,
          genre: genreRes.data.genres[0],
          pop: popularity,
          releaseDate: release_date,
        });
        tracks.items.forEach((el, idx) => {
            if (idx <= 15){
                setAlbTracks(trackData => [...trackData, el.name])
            }
        })
      });
    });
  };

  const selectType = (e) => {
    setType({ type: e.target.value });
  };

  const create = () => {
    axios.post("/user/create/album", {
    artistName: albumData.artistName,
    artistId: albumData.artistId,
    albumName: albumData.albumName,
    tracks: albTracks.join(', '),
    image: albumData.image,
    genre: albumData.genre,
    popularity: albumData.pop,
    releaseDate: albumData.releaseDate,
    type: type.type
    }).then((res) => {
      props.createCardDelay()
      props.cancel()
    })
  };

  return (
    <>
      <div className="cardGui ">
        <div className="guiItem1">
          <h3>Create a new Album card</h3>
        </div>

        <div className="middleBlock">
          <div className="arrow" onClick={props.minus}>
            {lArrow}
          </div>
          <div className="guiItem2 guiForm">
            <input
              type="text"
              className="guiInput "
              placeholder="Album"
              onChange={(e) => search(e.target.value)}
            />
            {data.length > 0 && (
              <AlbumDropdown data={data} handleChange={handleChange} />
            )}

            <select
              name="type"
              className="guiInput"
              id="type"
              onChange={selectType}
            >
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
          <div className="arrow" onClick={props.plus}>
            {rArrow}
          </div>
        </div>

        <div className="guiItem3">
          <button className="guiBtn cancel" onClick={props.cancel}>
            Cancel
          </button>
          <button
            className="guiBtn create"
            onClick={create}
          >
            Create
          </button>
        </div>
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return { ...state.token };
}

export default connect(mapStateToProps)(NewAlbum);
