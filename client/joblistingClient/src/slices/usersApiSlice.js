import {apiSlice} from './apiSlice.js';
const USERS_URL = '/api';

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query:(formData) => ({
                url: `${USERS_URL}/signin`,
                method: 'POST',
                body: {
                    name:formData.name,
                    email: formData.email,
                    password:formData.password,
                    role: formData.role,
                }

            
            })
        }),

        signup: builder.mutation({
            query: (formData) => ({
                url: `${USERS_URL}/signup`,
                method: 'POST',
                body:{
                    name:formData.name,

                    email:formData.email,

                    password:formData.password,

                    role: formData.role,

                    
                }
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
