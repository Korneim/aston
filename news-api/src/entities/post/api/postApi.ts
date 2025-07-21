import { baseApi } from '../../../shared';

export interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
}

export const postApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getPosts: builder.query<
            Post[],
            {
                limit?: number;
                userId?: number;
                page?: number;
            }
        >({
            query: (params) => ({
                url: 'posts',
                params: {
                    _limit: params.limit,
                    _page: params.page,
                    userId: params.userId,
                },
            }),
            providesTags: ['Post'],
        }),
        getPostByID: builder.query<Post, number>({
            query: (id) => `posts/${id}`,
            providesTags: ['Post'],
        }),
        updatePost: builder.mutation<Post, Partial<Post>>({
            query: (id, ...data) => ({
                url: `posts/${id}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ['Post'],
        }),
    }),
});

export const { useGetPostsQuery } = postApi;
