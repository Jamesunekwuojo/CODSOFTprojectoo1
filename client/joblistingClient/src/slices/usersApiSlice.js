import {apiSlice} from './apiSlice.js';
const USERS_URL = '/api';

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query:(data) => ({
                url: `${USERS_URL}/signin`,
                method: 'POST',
                body:data
            })
        }),

        signup: builder.mutation({
            query: () => ({
                url: `${USERS_URL}/signup`,
                method: 'POST'
            })
        }),

        logout: builder.mutation({
            query: () => ({
                url: `${USERS_URL}/signout`,
                method: 'POST'
            })
        })
    })
});

export const {useLoginMutation, useLogoutMutation, useSignupMutation} = usersApiSlice;
