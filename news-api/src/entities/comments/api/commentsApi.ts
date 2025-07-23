import { baseApi } from '../../../shared/api';
import type { Comments } from '../model';
import type { Filters } from '../model/types.ts';

export const commentsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getComments: builder.query<Comments[], Filters>({
            query: (params) => ({
                url: 'comments',
                params: {
                    _limit: params.limit,
                    _page: params.page,
                    userId: params.userId,
                    completed: params.completed,
                },
            }),
            providesTags: ['Comment'],
        }),
        getCommentID: builder.query<Comments[], number>({
            query: (id) => `post/${id}/comments`,
            providesTags: ['Comment'],
        }),
        updateComment: builder.mutation<Comments, Partial<Comments>>({
            query: (id, ...data) => ({
                url: `comments/${id}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ['Comment'],
        }),
    }),
});

export const { useGetCommentIDQuery } = commentsApi;
