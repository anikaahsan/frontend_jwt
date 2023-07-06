import { createSlice } from "@reduxjs/toolkit";



const initialState={
    isLoggedin:false,
}

export const LoginSlice=createSlice({
    name:'Login',
    initialState,
    reducers:{

        login:(state)=>{
            state.isLoggedin=true;
        },

        logout:(state)=>{
            state.isLoggedin=false;
        },

    }

})

//action creators are generated for each reducer function
export const {login,logout}=LoginSlice.actions

export default LoginSlice.reducer