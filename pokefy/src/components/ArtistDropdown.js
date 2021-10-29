import React from "react";

const ArtistDropdown = (props) => {
  const { handleChange, data } = props;

  return (
    <div>
      <select className="guiInput" onChange={(e) => handleChange(e)}>
        <option className="guiInput" >Select an Artist</option>
        {data.map((item, index) => (
          <option className="guiInput"
            key={index}
            value={[
              [item.name.split(",").join("")],
              [item.id],
              [item.popularity],
              [item.followers.total],
              [item.genres[0]],
            ]}
          >
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ArtistDropdown;
