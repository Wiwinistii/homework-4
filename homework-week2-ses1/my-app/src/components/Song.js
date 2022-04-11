import React from "react";
import "./Song.css";

function Song(props)  {
  const {
    url, alt, albumName, artistName, onClick, isSelected, nameOfButton,
  } = props;
  return (
    <div className="Song">
      <img src={url} alt={alt} />
      <div className="text" >
        <p className="album">{albumName}</p>
        <p>{artistName}</p>
      </div>
      <div className='button'>
        <button 
        type="button" 
        className='btn' 
        onClick={() => onClick (isSelected)}
        >
          {nameOfButton}
        </button>
      </div>
    </div>
  );
}

export default Song;