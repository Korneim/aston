import { MainLayout, ThemeProvider } from '../shared';
import { PostList } from '../widgets/PostList';
import { Footer, Header } from '../widgets';
import { useCallback, useState } from 'react';
import { withLoading } from '../shared/lib/hoc/withLoading.tsx';
import { CommentList } from '../widgets/CommentList';
import { PostLengthFilter } from '../features/PostLengthFilter/ui';
import { MOCK_DATA, type Post } from '../mock';

function App() {
    const [isLoading, setLoading] = useState(true);
    const [currentPosts, setCurrentPosts] = useState(MOCK_DATA);

    setTimeout(setLoading, 1000, false);
    const PostListWithLoading = withLoading(PostList);

    const handleChangePosts = useCallback((posts: Post[]) => {
        setCurrentPosts(posts);
    }, []);

    return (
        <ThemeProvider>
            <MainLayout>
                <Header />
                <PostLengthFilter posts={MOCK_DATA} handleChangePosts={handleChangePosts} />
                <PostListWithLoading isLoading={isLoading} posts={currentPosts} />
                <CommentList />
                <Footer />
            </MainLayout>
        </ThemeProvider>
    );
}

export default App;
