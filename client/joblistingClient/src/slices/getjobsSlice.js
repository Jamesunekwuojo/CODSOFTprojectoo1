import { pubicapiSlice } from "./publicapiSlice";
const URL = '/api'

export const getjobsSlice = pubicapiSlice.injectEndpoints({
    endpoints: (builder)=> ({
        getJobs: builder.query({
            query: () => ({
                url:`${URL}/allJobs`,
                method: 'GET',
            }),
        }),
    })
}) 
