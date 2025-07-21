import { PostLengthFilter, usePosts } from '../../../features';
import { CommentList } from '../../../widgets';
import { useMemo, useState } from 'react';
import { withLoading } from '../../../shared';
import { PostList } from '../../../widgets/PostList';
import { filterByLength } from '../../../features/PostLengthFilter/lib';

export function MainPage() {
    const { data: posts = [], isLoading } = usePosts();
    const [titleLengthFilter, setTitleLengthFilter] = useState<number | null>(null);
    const PostListWithLoading = withLoading(PostList);

    const filteredPosts = useMemo(() => {
        return titleLengthFilter ? filterByLength(posts, titleLengthFilter) : posts;
    }, [posts, titleLengthFilter]);

    return (
        <div>
            <PostLengthFilter titleLength={titleLengthFilter} onTitleLengthChange={setTitleLengthFilter} />;
            <PostListWithLoading isLoading={isLoading} posts={filteredPosts} />;
            <CommentList />;
        </div>
    );
}
