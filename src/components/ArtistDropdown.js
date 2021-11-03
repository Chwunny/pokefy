import React from "react";

const ArtistDropdown = (props) => {
  const { handleChange, data } = props;

  return (
    <>
      <select className="guiInput" onChange={(e) => handleChange(e)}>
        <option >Select an Artist</option>
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
    </>
  );
};

export default ArtistDropdown;
