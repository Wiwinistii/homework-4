import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./tokenreducer";
import auth from "../redux/token-slice";

export default configureStore({
  reducer: {
    token: authReducer,
    // auth
  },
});