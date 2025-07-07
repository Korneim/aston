import { MainLayout, ThemeProvider } from '../shared';
import { PostList } from '../widgets/PostList';
import { Footer, Header } from '../widgets';
import { useState } from 'react';
import { withLoading } from '../shared/lib/hoc/withLoading.tsx';

function App() {
    const [isLoading, setLoading] = useState(true);

    setTimeout(setLoading, 1000, false);
    const PostListWithLoading = withLoading(PostList);

    return (
        <ThemeProvider>
            <MainLayout>
                <Header />
                <PostListWithLoading isLoading={isLoading} />
                <Footer />
            </MainLayout>
        </ThemeProvider>
    );
}

export default App;
