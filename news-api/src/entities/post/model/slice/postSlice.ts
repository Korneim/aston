import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../../../app/provider/store.ts';
import { postApi } from '../../api';
import type { Post } from '../../api/postApi.ts';

const postAdapter = createEntityAdapter<Post>({});

export const postSlice = createSlice({
    name: 'postsGet',
    initialState: postAdapter.getInitialState(),
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(postApi.endpoints.getPosts.matchFulfilled, (state, action) => {
            console.log('Data received:', action.payload);
            postAdapter.setAll(state, action.payload);
        });
        builder.addMatcher(postApi.endpoints.getPostByID.matchFulfilled, (state, action) => {
            postAdapter.upsertOne(state, action.payload);
        });
    },
});

export const postSelectors = postAdapter.getSelectors<RootState>((state) => state.posts);

export const selectAllPosts = postSelectors.selectAll;
