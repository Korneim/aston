import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    tagTypes: ['User', 'Post', 'Comment', 'Album', 'TODO'],
    endpoints: (builder) => ({}),
});
