import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const AuthApi=createApi({
    reducerPath:'authApi',
    baseQuery:fetchBaseQuery({baseUrl:'http://10.0.2.2:8000/'}),

    endpoints:(builder)=>({
        registerUser:builder.mutation({
            query:(user)=>{
                return{
                    url:'register/',
                    method:'POST',
                    body:user,



                }
            }
        }),
    //mutation are used to send data updates to the server and apply the changes to the local cache.
    loginUser:builder.mutation({
        query:(user)=>{
            return{
                url:'login/',
                method:'POST',
                body:user,

            }
        }
    }),
    getLoggedUser:builder.query({
        query:(token)=>{
            return{
                url:'profile/',
                method:'GET',
                headers:{
                    authorization:`Bearer ${token}`
                }
            }
        }
    })

    }),
   
   

    

})
export const {useRegisterUserMutation,useGetLoggedUserQuery,useLoginUserMutation}=AuthApi