import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store"
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
