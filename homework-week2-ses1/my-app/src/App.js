import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import AppRouter from "./AppRouter";


function App() {
  return (
  <Provider store={store}>
    <div className="App">
      <AppRouter/>
    </div>
  </Provider>

  );
}

export default App;
