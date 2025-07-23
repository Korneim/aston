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

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone?: string;
    website?: string;
    address: Address;
};

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query<User[], void>({
            query: () => ({
                url: 'users',
            }),
        }),
    }),
});

export const { useGetUsersQuery } = userApi;
