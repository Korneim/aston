import { baseApi } from '../../../shared';

export interface Albums {
    userId: number;
    id: number;
    title: string;
}

export const albumsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAlbums: builder.query<
            Albums[],
            {
                limit?: number;
                userId?: number;
                page?: number;
            }
        >({
            query: (params) => ({
                url: 'albums',
                params: {
                    _limit: params.limit,
                    _page: params.page,
                    userId: params.userId,
                },
            }),
            providesTags: ['Album'],
        }),
        getAlbumByID: builder.query<Albums, number>({
            query: (id) => `todos/${id}`,
            providesTags: ['Album'],
        }),
        updateAlbum: builder.mutation<Albums, Partial<Albums>>({
            query: (id, ...data) => ({
                url: `albums/${id}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ['Album'],
        }),
    }),
});

export const { useGetAlbumsQuery } = albumsApi;
