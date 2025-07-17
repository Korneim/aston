import { baseApi } from '../../../shared';

type Geo = {
    lat: string;
    lng: string;
};
type Address = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
};
type Company = {
    bs: string;
    catchPhrase: string;
    name: string;
};

export type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    company: Company;
    phone?: string;
    website?: string;
    address: Address;
};

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
