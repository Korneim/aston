import { useGetPostsQuery } from '../../../../entities';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const usePosts = () => {
    return useGetPostsQuery({
        limit: 100,
        page: 1,
    });
};
