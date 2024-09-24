import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:5000',
  
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.userInfo?.token;

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);  // No space after 'Authorization'
    }

    return headers;
  }
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User'],
  endpoints: (builder) => ({}),
});
