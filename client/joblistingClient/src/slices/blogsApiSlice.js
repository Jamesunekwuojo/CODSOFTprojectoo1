import { apiSlice } from "./apiSlice.js";

export const blogsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createBlog: builder.mutation({
      query: (formData) => ({
        url: "/api/createblog",
        method: "POST",
        body: formData,
      }),
      // Optionally, add cache invalidation if necessary after creating a new blog
      // invalidatesTags: ['Blogs'], // Uncomment if you want to invalidate on creation
    }),

    // query to get specific employer blog
    getEmployerBlogs: builder.query({
      query: ({ page = 1, limit = 6 }) => ({
        url: `/api/blogs:byId?page=${page}&limit=${limit}`,
        method: "GET",
      }),
      providesTags: ['Blogs'], // Tagging this query to track it for invalidation
    }),

    getAllBlogs: builder.query({
      query: ({ page = 1, limit = 6 }) => ({
        url: `/api/allBlogs?page=${page}&limit=${limit}`,
        method: "GET",
      }),
      providesTags: ['Blogs'], // Tagging this query to track it for invalidation
    }),

    updateBlog: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/api/blog/${id}`,
        method: "PUT",
        body: formData,
      }),
      // Invalidate the cached data related to blogs after update
      invalidatesTags: ['Blog'], // Invalidates the list of blogs so they are refetched
    }),

    getBlogid: builder.query({

      query: (id) => ({
        url: `/api/blog/${id}`,
        method: 'GET'
      })

    }),

    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/api/blog/${id}`,
        method: "DELETE",
      }),
      // Invalidate the cached data after deletion to trigger a refetch
      invalidatesTags: ['Blog'],
    }),

    latestBlogs: builder.query({
      query: () => ({
        url: '/api/blogs',
        method: "GET",
      })
    })
  }),
});

export const {
  useCreateBlogMutation,
  useGetEmployerBlogsQuery,
  useGetAllBlogsQuery,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
  useGetBlogidQuery,
  useLatestBlogsQuery
} = blogsApiSlice;


