import { createSlice } from "@reduxjs/toolkit";
import { fetchProject } from "./FetchRequest";

export const profileSlice = createSlice({
    name:'profile',
    initialState:{
        profile:[],
        status:'idle',
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProject.pending,(state)=>{
            state.status = 'loading'
        })
        .addCase(fetchProject.fulfilled,(state,action)=>{
            state.status = 'completed'
            state.profile = action.payload || [];
        })
        .addCase(fetchProject.rejected,(state,action)=>{
            state.status = 'faild'
            state.error = action.error || [];
        })

        
    }
})

export default profileSlice.reducer