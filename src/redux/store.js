import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {carReducer} from "./slices";

const rootReducer=combineReducers({
 car: carReducer
})

const setupStore=()=>configureStore({
    reducer:rootReducer
})

export {
    setupStore
}