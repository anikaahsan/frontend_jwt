import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import LoginReducer from '../features/LoginSlice'
import AuthReducer from '../features/AuthSlice'
import UserReducer from '../features/UserSlice'
import { AuthApi } from '../services/AuthApi'

export const store = configureStore({
  reducer: {
    [AuthApi.reducerPath]:AuthApi.reducer,
    Login:LoginReducer,
    auth:AuthReducer,
    profile:UserReducer,


  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware().concat(AuthApi.middleware),
})
setupListeners(store.dispatch)

//created a redux store