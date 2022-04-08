import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./tokenreducer";

export default configureStore({
    reducer: {
        token: tokenReducer,
    }
});