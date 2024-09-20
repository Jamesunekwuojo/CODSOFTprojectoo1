import { apiSlice } from "./apiSlice";
const USERS_URL = '/api';

export const jobsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createjob: builder.mutation({
            query:(formData) => ({
                url:`${USERS_URL}/createjob`,
                method: 'POST',
                body : {
                    JobTitle: formData.JobTitle,
                    JobLocation: formData.JobLocation,
                    JobType: formData.JobType,
                    MinimumSalary: formData.MinimumSalary,
                    MaximumSalary: formData.MaximumSalary,
                    ApplicationDeadline:formData.ApplicationDeadline,
                    EmployerEmail: formData.EmployerEmail,
                    JobDescription:formData.JobDescription


                }
            })
        }),

        getjobs : builder.query({
            query: (formData) => ({
                url: `${USERS_URL}/getjobsByID`,
                method: 'GET',
                

            })
            
        })
    })
})