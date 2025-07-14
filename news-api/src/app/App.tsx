import { MainLayout, ThemeProvider, withLoading } from '../shared';
import { PostList } from '../widgets/PostList';
import { CommentList, Footer, Header } from '../widgets';
import { useMemo, useState } from 'react';
import { PostLengthFilter, usePosts } from '../features';
import { UserTabs } from '../widgets/UserTabs/UserTabs.tsx';
import { filterByLength } from '../features/PostLengthFilter/lib';

function App() {
    const { data: posts = [], isLoading } = usePosts();
    const [titleLengthFilter, setTitleLengthFilter] = useState<number | null>(null);
    const PostListWithLoading = withLoading(PostList);

    const filteredPosts = useMemo(() => {
        return titleLengthFilter ? filterByLength(posts, titleLengthFilter) : posts;
    }, [posts, titleLengthFilter]);

    console.log(posts);

    return (
        <ThemeProvider>
            <MainLayout>
                <Header />
                <UserTabs />
                <PostLengthFilter titleLength={titleLengthFilter} onTitleLengthChange={setTitleLengthFilter} />
                <PostListWithLoading isLoading={isLoading} posts={filteredPosts} />
                <CommentList />
                <Footer />
            </MainLayout>
        </ThemeProvider>
    );
}

export default App;
