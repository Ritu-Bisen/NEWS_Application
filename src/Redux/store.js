import { configureStore } from "@reduxjs/toolkit";
import likesReducer from "./likeNewsSlice"
import notesReducer from './notesSlice'

const store = configureStore({
    reducer:{
likes:likesReducer,
note:notesReducer
    }
})

export default store;