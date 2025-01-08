import { apiSlice } from "./apiSlice.js";

export const jobsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation to create a job
    createJob: builder.mutation({
      query: (formData) => ({
        url: '/api/createjob',
        method: "POST",
        body: formData,
      }),
    }),

    // Query to get jobs for a specific employer by their email
    getEmployerJobs: builder.query({
      query: ({ page = 1, limit = 6 }) => ({
        url: `/api/jobsbyId?page=${page}&limit=${limit}`,
        method: "GET",
      }),
    }),

   

    // Query to get all jobs
    getJobs: builder.query({
      query: ({ page = 1, limit = 6 }) => ({
        url: `/api/allJobs?page=${page}&limit=${limit}`,
        method: "GET",
      }),
    }),



    // Mutation to update job
      // Mutation to update a job
      updateJob: builder.mutation({
        query: ({ jobId, formData }) => ({
          url: `/api/updatejob/${jobId}`,
          method: "PUT",
          body: formData,
        }),
      }),

      deleteJob: builder.mutation({
        query: (jobId) => ({
          url: `/api/deletejob/${jobId}`,
          method: "DELETE",
        }),
      }),


      searchJob: builder.mutation({
        query: (formData) => ({
          url: '/api/job/search',
          method: 'POST',
          body: formData,
        }),
      }),

      exploreJob: builder.query({
        query: (category) => ({
          url: `/api/explorejob?JobCategory=${encodeURIComponent(category)}`,
          method: 'GET',
          
        })
      })
      

    

      

      

   
  }),
});

export const {
  useCreateJobMutation,
  useGetEmployerJobsQuery,
  // useGetJobsByCategoryQuery,
  useGetJobsQuery,
  useUpdateJobMutation,
  useDeleteJobMutation, 
  useSearchJobMutation,
  useExploreJobQuery
  

} = jobsApiSlice;
