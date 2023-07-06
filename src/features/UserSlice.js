import { createSlice } from "@reduxjs/toolkit";

const initialState={
    email:'',
    username:'',
}

export  const UserSlice=createSlice({
    name:'profile',
    initialState,
    reducers:{
        setProfile:(state,action)=>{
            state.email=action.payload.email
            state.username=action.payload.username
        }
    }
})
//action creator are generated for each case reducer function
export const {setProfile}=UserSlice.actions
export default UserSlice.reducer