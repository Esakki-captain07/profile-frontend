import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProject = createAsyncThunk(
    'profile,fetchProfile',
    async()=>{
        try {
            let response = await axios.get(`https://protfolifo-backend.onrender.com/user/all-projects`)
        console.log(response.data)
        return response.data.data
            
        } catch (error) {
            console.log('fetch profile error',error)
            throw error
        }
    }
)