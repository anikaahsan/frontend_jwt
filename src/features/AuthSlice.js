import { createSlice } from "@reduxjs/toolkit";

const initialState={
    access_token:null,
}

export const AuthSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        setAccessToken:(state,action)=>{
            state.access_token=action.payload.access_token
        }
    }
})

export const {setAccessToken}=AuthSlice.actions
export default AuthSlice.reducer