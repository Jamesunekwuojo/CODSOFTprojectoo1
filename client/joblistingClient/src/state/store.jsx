import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice';
import { apiSlice } from '../slices/apiSlice';
import { publicapiSlice } from "../slices/publicapiSlice"

export const store = configureStore({
    reducer: {
        auth:authReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
        [publicapiSlice.reducerPath]: publicapiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware, publicapiSlice.middleware),
    devTools: true,
})

