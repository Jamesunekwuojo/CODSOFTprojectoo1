import {apiSlice} from './apiSlice.js';


export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query:(formData) => ({
                url: '/api/signin',
                method: 'POST',
                body: {
                 
                    email: formData.email,
                    password:formData.password,
                    role: formData.role,
                }

            
            })
        }),

        signup: builder.mutation({
            query: (formData) => ({
                url: '/api/signup ',
                method: 'POST',
                body:{
                 

                    email:formData.email,

                    password:formData.password,

                    role: formData.role,

                    
                }
            })
        }),

        logout: builder.mutation({
            query: () => ({
                url: '/api/signout',
                method: 'POST'
            })
        }),


        forgotPassword: builder.mutation({
            query: (email) => ({
                url:'/api/users/forgot-password',
                method: 'POST',
                body:email

                // body: {
                //     email: formData.email
                // }

            })
        }),

        resetPassword: builder.mutation({
            query: (formData) => ({
                url:'/api/users/reset-password',
                method: 'POST',
                body:formData,
                // body: {
                //     email: formData.newPassword
                // }

            })
        }) 
    })
});

export const {useLoginMutation, useLogoutMutation, useSignupMutation, useForgotPasswordMutation,useResetPasswordMutation} = usersApiSlice;
