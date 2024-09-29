import { publicapiSlice } from "./publicapiSlice";
const URL = '/api'

export const getjobsSlice = publicapiSlice.injectEndpoints({
    endpoints: (builder)=> ({
        getJobs: builder.query({
            query: () => ({
                url:`${URL}/allJobs`,
                method: 'GET',
            }),
        }),
    })
}) 

export  const {
    useGetJobsQuery,
} = getjobsSlice