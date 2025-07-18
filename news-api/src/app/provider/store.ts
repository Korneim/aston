import { configureStore } from '@reduxjs/toolkit';
import { postSlice, userSlice } from '../../entities';
import { baseApi } from '../../shared';

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        users: userSlice.reducer,
        posts: postSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
