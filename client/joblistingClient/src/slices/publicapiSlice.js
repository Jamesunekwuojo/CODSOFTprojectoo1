import {createApi, fetchBaseQuery } from '@reduxjs/toolkit';


const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:5000',
    
});

export const pubicapiSlice = createApi({
    baseQuery,
    tagTypes: ['Public'],
    endpoints: (builder) => ({}),
})

