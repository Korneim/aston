import { createEntityAdapter, createSlice, type EntityAdapter } from '@reduxjs/toolkit';
import { userApi } from '../../api';
import type { RootState } from '../../../../app/provider/store.ts';
import type { User } from '../types.ts';

const usersAdapter: EntityAdapter<User, number> = createEntityAdapter<User>({});

export const userSlice = createSlice({
    name: 'usersGet',
    initialState: usersAdapter.getInitialState(),
    reducers: {},
    extraReducers: (builder): void => {
        builder.addMatcher(userApi.endpoints.getUsers.matchFulfilled, (state, action): void => {
            console.log('Data received:', action.payload);
            usersAdapter.setAll(state, action.payload);
        });
        builder.addMatcher(userApi.endpoints.getUserByID.matchFulfilled, (state, action): void => {
            usersAdapter.upsertOne(state, action.payload);
        });
    },
});

export const usersSelectors = usersAdapter.getSelectors<RootState>((state) => state.users);

export const selectAllUsers = usersSelectors.selectAll;
