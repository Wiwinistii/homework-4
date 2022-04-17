import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD
import authReducer from "./tokenreducer";
import auth from "../redux/token-slice";

export default configureStore({
  reducer: {
    token: authReducer,
    // auth
=======
// import authReducer from "./auth-reducer";
import authReducer from "./auth-slice";

export default configureStore({
  reducer: {
    // token: authReducer,
    auth: authReducer
>>>>>>> 036202cb11c4a65cd9053764b509f0dbf19ee304
  },
});