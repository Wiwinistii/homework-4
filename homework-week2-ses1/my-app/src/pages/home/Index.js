// import Song from "../../component/Song";
// import data from '../../Data.js'
import "./Home.css";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { saveToken } from "../../redux/token";


const BASE_URL = "https://api.spotify.com/v1";
const CLIENT_ID = "156d8ff82a664cdca18c4ff13c8809f3";
const REDIRECT_URI = "http://localhost:3000/songspotify";
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const SCOPE = "playlist-modify-private";
const AUTH_URL = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=token&show_dialog=true`;
const isAuth = () => {
  window.location = AUTH_URL;
  localStorage.setItem("isLoggedIn", true);
};

function Home() {
  return (
    <div className="Home">
      <p className="title">Click the button below to login</p>
      <button onClick={isAuth}>Login</button>
    </div>
    );
  }

export default Home;