import { MainLayout, ThemeProvider, withLoading } from '../shared';
import { PostList } from '../widgets/PostList';
import { CommentList, Footer, Header } from '../widgets';
import { useCallback, useEffect, useState } from 'react';
import { PostLengthFilter, usePosts } from '../features';
import { type Post } from '../mock';
import { UserTabs } from '../widgets/UserTabs/UserTabs.tsx';

function App() {
    const { data: posts = [], isLoading } = usePosts();
    const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);
    const PostListWithLoading = withLoading(PostList);

    useEffect(() => {
        setFilteredPosts(posts);
    }, [posts]);

    const handleChangePosts = useCallback((newPosts: Post[]) => {
        setFilteredPosts(newPosts);
    }, []);

    console.log(posts);

    return (
        <ThemeProvider>
            <MainLayout>
                <Header />
                <UserTabs />
                <PostLengthFilter posts={posts} handleChangePosts={handleChangePosts} />
                <PostListWithLoading isLoading={isLoading} posts={filteredPosts} />
                <CommentList />
                <Footer />
            </MainLayout>
        </ThemeProvider>
    );
}

export default App;
