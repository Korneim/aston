import { useGetPostsQuery } from '../../../../entities';

export const usePosts = () => {
    return useGetPostsQuery({
        limit: 11,
        page: 1,
    });
};
