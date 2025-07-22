import { useGetPostsQuery } from '../../../../entities';

export const usePosts = () => {
    return useGetPostsQuery({
        limit: 100,
        page: 1,
    });
};
