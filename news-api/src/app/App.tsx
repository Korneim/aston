import { MainLayout, ThemeProvider } from '../shared';
import { PostList } from '../widgets/PostList';
import { Footer, Header } from '../widgets';

function App() {
    return (
        <ThemeProvider>
            <MainLayout>
                <Header />
                <PostList />
                <Footer />
            </MainLayout>
        </ThemeProvider>
    );
}

export default App;
