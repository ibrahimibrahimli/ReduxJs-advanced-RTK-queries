import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import postsSlice from "../features/posts/postsSlice";

const store = configureStore({
    reducer:{
        //for beginners
        counter : counterReducer,
        posts : postsSlice
    }
})

export default store;