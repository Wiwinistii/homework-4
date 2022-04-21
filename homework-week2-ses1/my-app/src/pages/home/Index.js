import "./Home.css";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToken } from "../../redux/auth-slice";
import headphonesImage from "../../assets/images/headphones.png";

function Home () {
  const BASE_URL = "https://api.spotify.com/v1";
  const CLIENT_ID = "156d8ff82a664cdca18c4ff13c8809f3";
  const REDIRECT_URI = "http://localhost:3000/songspotify";
  const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
  const SCOPE = "playlist-modify-private";
  const AUTH_URL = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=token&show_dialog=true`;
  const dispatch = useDispatch();

  const isAuth = () => {
    window.location = AUTH_URL;
    localStorage.setItem("isLoggedIn", true);
  };

return (
  <div className="Home">
      <div className="centerImage">
        <img className="headphonesImage" src={headphonesImage}/>
      </div>
      <div className="content">
      <div className="title-ofContent">
          <p className="titleHome">SPOTIFY</p>
          <p className="titleHomeChild">Choose and listen</p>
          <p className="titleDescription">Enjoy your favorite song and have fun</p>
        </div>
        <button className="buttonLogin" type="submit" onClick={isAuth}>
          Login
        </button>
      </div>
</div>
);
}

export default Home;