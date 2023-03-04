import React from "react";

// the main job of this component is to render the gifs on the screen
const GifsCard = ({ gif }) => {
  return (
    <div key={gif.id} className="card">
      <img
        className="gif-img"
        key={gif.id}
        src={gif.images.fixed_height.url}
        alt={gif.title}
      />
      <div style={{ padding: "10px" }}>
        <div className="card-username-container">
          <h5 className="card-title">{gif.user?.display_name}</h5>
          <p> &#11088; </p>
        </div>
        <p className="card-text">@{gif.user?.username}</p>
      </div>
    </div>
  );
};

export default GifsCard;
