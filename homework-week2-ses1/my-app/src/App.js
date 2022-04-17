import React from "react";
import { Provider } from "react-redux";
import "./App.css";
<<<<<<< HEAD
import SpotifyRouter from "./routes/SpotifyRouter";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <SpotifyRouter />
=======
import store from "./redux/store";
import AppRouter from "./AppRouter";


function App() {
  return (
  <Provider store={store}>
    <div className="App">
      <AppRouter/>
>>>>>>> 036202cb11c4a65cd9053764b509f0dbf19ee304
    </div>
  </Provider>
  );
}

export default App;
