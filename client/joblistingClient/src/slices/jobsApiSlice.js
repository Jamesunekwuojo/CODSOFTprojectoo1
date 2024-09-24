import { apiSlice } from "./apiSlice";
const USERS_URL = '/api';

export const jobsApiSlice = apiSlice.injectEndpoints({
    
    endpoints: (builder) => ({
        createjob: builder.mutation({
            query:(formData) => ({
                url:`${USERS_URL}/createjob`,
                method: 'POST',
                body : formData,
                 
                
            }),

            
        }),

        

        // getjobs : builder.query({
        //     query: (formData) => ({
        //         url: `${USERS_URL}/getjobsByID`,
        //         method: 'GET',
                

        //     })
            
        // })

    })
})

export const {useCreatejobMutation } = jobsApiSlice;