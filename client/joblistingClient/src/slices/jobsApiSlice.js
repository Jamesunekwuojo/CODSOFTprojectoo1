import { apiSlice } from "./apiSlice.js";
const JOBS_URL = "/api";

export const jobsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation to create a job
    createJob: builder.mutation({
      query: (formData) => ({
        url: `${JOBS_URL}/createjob`,
        method: "POST",
        body: formData,
      }),
    }),

    // Query to get jobs for a specific employer by their email
    getEmployerJobs: builder.query({
      query: ({ page = 1, limit = 6 }) => ({
        url: `${JOBS_URL}/jobsbyId?page=${page}&limit=${limit}`,
        method: "GET",
      }),
    }),

    // Query to get jobs by category
    // getJobsByCategory: builder.query({
    //     query: (category) => ({
    //         url: `${JOBS_URL}/category`,
    //         method: 'GET',
    //         params: { JobCategory: category },
    //     }),
    // }),

    // Query to get all jobs
    getJobs: builder.query({
      query: ({ page = 1, limit = 6 }) => ({
        url: `${JOBS_URL}/allJobs?page=${page}&limit=${limit}`,
        method: "GET",
      }),
    }),

   
  }),
});

export const {
  useCreateJobMutation,
  useGetEmployerJobsQuery,
  // useGetJobsByCategoryQuery,
  useGetJobsQuery,

} = jobsApiSlice;
