import { apiSlice } from "./apiSlice";

export const subscribeApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        subscribe: builder.mutation({
            query:(email) => ({
                url:'api/subscribe',
                method:'POST',
                body:email

        }),
        })
    })
})