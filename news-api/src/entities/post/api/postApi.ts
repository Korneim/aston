import { baseApi } from '../../../shared';

interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
}

export const postApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getPosts: builder.query<Post[], { limit: number; page?: number }>({
            query: ({ limit, page = 1 }) => ({
                url: 'posts',
                params: {
                    _limit: limit,
                    _page: page,
                },
            }),
        }),
    }),
});

export const { useGetPostsQuery } = postApi;
