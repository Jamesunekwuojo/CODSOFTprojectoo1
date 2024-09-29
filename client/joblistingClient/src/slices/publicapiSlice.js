import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:5000',
    credentials:'omit',
    
});

export const publicapiSlice = createApi({
    baseQuery,
    tagTypes: ['Public'],
    endpoints: (builder) => ({}),
})

