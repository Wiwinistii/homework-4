import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./tokenreducer";
import authSlice from "./authSlice";

export default configureStore({
    reducer: {
        token: tokenReducer,
    }
});