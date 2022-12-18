import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:1 , title: "ReactJs", content: "React is easy"},
    {id:2 , title: "ReduxJs", content: "Redux is Little bit dificult"}
]

const postSlice = createSlice({
    name : "posts",
    initialState,
    reducers : {
        addPost : (state, action) =>{
            state.push(action.payload)
        } 
    }
})

export const selectAllPosts = (state) => state.posts;
export const {addPost} = postSlice.actions;
export default postSlice.reducer;