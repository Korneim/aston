import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { type User, userApi } from '../../api/userApi.ts';
import type { RootState } from '../../../../app/provider/store.ts';

const usersAdapter = createEntityAdapter<User>({
    selectId: (user) => user.id,
});

export const userSlice = createSlice({
    name: 'usersGet',
    initialState: usersAdapter.getInitialState(),
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(userApi.endpoints.getUsers.matchFulfilled, (state, action) => {
            console.log('Data received:', action.payload);
            usersAdapter.setAll(state, action.payload);
        });
        builder.addMatcher(userApi.endpoints.getUserByID.matchFulfilled, (state, action) => {
            usersAdapter.upsertOne(state, action.payload);
        });
    },
});

export const usersSelectors = usersAdapter.getSelectors<RootState>((state) => state.users);

export const selectAllUsers = usersSelectors.selectAll;
