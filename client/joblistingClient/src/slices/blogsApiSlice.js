import {apiSlice} from "./apiSlice.js";

export const blogsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        createBlog: builder.mutation({
            query: (formData) => ({
                url: '/api/createblog',
                method:'POST',
                body: formData
            })
        }),

        // query to get specific employer blog

        getEmployerBlogs: builder.query({

            query: () => ({
                url: '/api/blogsbyId',
                method: 'GET',

            })

        }),

    })
   
})


export const {
    useCreateBlogMutation,
    useGetEmployerBlogsQuery,

} = blogsApiSlice