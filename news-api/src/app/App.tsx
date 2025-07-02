import { MainLayout, ThemeProvider } from '../shared';
import { PostList } from '../widgets/PostList';

function App() {
    return (
        <ThemeProvider>
            <MainLayout>
                <PostList />
            </MainLayout>
        </ThemeProvider>
    );
}

export default App;
