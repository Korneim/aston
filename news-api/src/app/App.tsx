import { MainLayout, ThemeProvider, withLoading } from '../shared';
import { PostList } from '../widgets/PostList';
import { CommentList, Footer, Header } from '../widgets';
import { useCallback, useEffect, useState } from 'react';
import { PostLengthFilter } from '../features';
import { type Post } from '../mock';
import { useGetPostsQuery } from '../entities';

function App() {
    const { data: posts = [], isLoading } = useGetPostsQuery({
        limit: 11,
        page: 1,
    });

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
                <PostLengthFilter posts={posts} handleChangePosts={handleChangePosts} />
                <PostListWithLoading isLoading={isLoading} posts={filteredPosts} />
                <CommentList />
                <Footer />
            </MainLayout>
        </ThemeProvider>
    );
}

export default App;
