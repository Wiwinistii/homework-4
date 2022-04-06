// import logo from './logo.svg';
// import Song from './component/Song';
// import './App.css';
// import Index from './pages/spotify/Index';
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import Spotify from "./pages/spotify/Index";

function App() {
  return (
  // <div className='App'>
  //   <Index/>
  //   </div>

  <Provider store={store}>
    <div className="App">
      <Spotify />
    </div>
  </Provider>

  );
}

export default App;
