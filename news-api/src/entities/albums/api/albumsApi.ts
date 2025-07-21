import { baseApi } from '../../../shared';

export interface Albums {
    userId: number;
    id: number;
    title: string;
}

export interface Photos {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
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
        getAlbumsPhotos: builder.query<
            Photos[],
            {
                limit?: number;
                id?: number;
            }
        >({
            query: (params) => ({
                url: `albums/${params.id}/photos`,
                params: {
                    _limit: params.limit,
                    userId: params.id,
                },
            }),
            providesTags: ['Album'],
        }),
        getAlbumByID: builder.query<Albums, number>({
            query: (id) => `albums/${id}`,
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

export const { useGetAlbumsQuery, useGetAlbumsPhotosQuery } = albumsApi;
