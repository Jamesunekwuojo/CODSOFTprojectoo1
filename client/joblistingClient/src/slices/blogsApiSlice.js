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

            query: ({ page = 1, limit = 6 }) => ({
                url: `/api/blogs:byId?page=${page}&limit=${limit}`,
                method: 'GET',

            })

        }),


        getAllBlogs: builder.query({

            query: ({ page = 1, limit = 6 }) => ({
                url:`/api/allBlogs?page=${page}&limit=${limit}`,
                method: 'GET',

            })

        }),

    })
   
})


export const {
    useCreateBlogMutation,
    useGetEmployerBlogsQuery,
    useGetAllBlogsQuery,

} = blogsApiSlice