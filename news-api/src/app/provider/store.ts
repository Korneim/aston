import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '../../entities/users/model/slice/userSlice.ts';
import { baseApi } from '../../shared';
import { postApi } from '../../entities';

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        users: userSlice.reducer,
        posts: postApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
