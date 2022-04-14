import "./Home.css";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { saveToken } from "../../redux/token";
import { addToken, isLogin } from "../../redux/auth-slice";

function Home () {
const BASE_URL = "https://api.spotify.com/v1";
const CLIENT_ID = "156d8ff82a664cdca18c4ff13c8809f3";
const REDIRECT_URI = "http://localhost:3000/songspotify";
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const SCOPE = "playlist-modify-private";
const AUTH_URL = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=token&show_dialog=true`;
  // const isLogged = useSelector((state) => state.auth.isLoggedIn); 
  // const dispatch = useDispatch();

  const isAuth = () => {
    window.location = AUTH_URL;
    // dispatch(isLogin())
    localStorage.setItem("isLoggedIn", true);
  };

  
  return (
    <div className="Home">
      <div className="header"></div>
      <div className="content">
        <p className="title">
          Click Button to Login the Application
        </p>
        <button type="submit" onClick={isAuth}>
          Login
        </button>
      </div>
      <div className="footer">
      </div>
    </div>
  );
}

export default Home;