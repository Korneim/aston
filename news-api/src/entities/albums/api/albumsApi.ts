import { baseApi } from '../../../shared';
import type { Albums, AlbumsFilters, Photos, PhotosFilters } from '../model';

export const albumsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAlbums: builder.query<Albums[], AlbumsFilters>({
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
        getAlbumsPhotos: builder.query<Photos[], PhotosFilters>({
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
        updateAlbum: builder.mutation<Albums, { id: number; data: Partial<Albums> }>({
            query: ({ id, ...data }) => ({
                url: `albums/${id.toString()}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ['Album'],
        }),
    }),
});

export const { useGetAlbumsQuery, useGetAlbumsPhotosQuery } = albumsApi;
