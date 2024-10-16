import { configureStore } from "@reduxjs/toolkit";
import profileReducer from './slice.js'

export default configureStore({
    reducer:{
        profile:profileReducer
    }
})