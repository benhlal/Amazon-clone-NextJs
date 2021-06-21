import {configureStore} from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";

//BIG ONION
export const store = configureStore({
    //SLICE
    reducer: {
        basket: basketReducer,
    },

});
