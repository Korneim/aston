import { PostLengthFilter, usePosts } from '../../features';
import { useMemo, useState } from 'react';
import { withLoading } from '../../shared';
import { PostList } from '../../widgets/PostList';
import { filterByLength } from '../../features/PostLengthFilter/lib';

export function Posts() {
    const { data: posts = [], isLoading } = usePosts();
    const [titleLengthFilter, setTitleLengthFilter] = useState<number | null>(null);
    const PostListWithLoading = withLoading(PostList);

    const filteredPosts = useMemo(() => {
        return titleLengthFilter ? filterByLength(posts, titleLengthFilter) : posts;
    }, [posts, titleLengthFilter]);

    console.log(posts);
    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            <PostLengthFilter titleLength={titleLengthFilter} onTitleLengthChange={setTitleLengthFilter} />
            <PostListWithLoading isLoading={isLoading} posts={filteredPosts} />
        </div>
    );
}
