// import logo from './logo.svg';
// import Song from './component/Song';
// import './App.css';
// import Index from './pages/spotify/Index';
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import SpotifyRouter from "./routes/SpotifyRouter";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <SpotifyRouter />
    </div>
  </Provider>
  );
}

export default App;
