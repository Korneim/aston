import { baseApi } from '../../../shared';
import type { User } from '../model';

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query<User[], void>({
            query: () => 'users',
            providesTags: ['User'],
        }),
        getUserByID: builder.query<User, number>({
            query: (id) => `users/${id}`,
            providesTags: ['User'],
        }),
        updateUser: builder.mutation<User, Partial<User>>({
            query: (id, ...data) => ({
                url: `users/${id}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ['User'],
        }),
    }),
});

export const { useGetUsersQuery, useGetUserByIDQuery, useUpdateUserMutation } = userApi;
