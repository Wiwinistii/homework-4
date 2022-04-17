import React from "react";
import "./Card.css";

function PlaylistCard(props) {
  const {
    url, alt, albumName, artistName,
  } = props;
  return (
    <div className="Card">
      <img src={url} alt={alt} />
      <div className="text">
        <p className="album">{albumName}</p>
        <p>{artistName}</p>
      </div>
    </div>
  );
}

export default PlaylistCard;