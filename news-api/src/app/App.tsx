import { MainLayout, ThemeProvider } from '../shared';
import { CommentList, Footer, Header } from '../widgets';
import { UserTabs } from '../widgets/UserTabs/UserTabs.tsx';

function App() {
    return (
        <ThemeProvider>
            <MainLayout>
                <Header />
                <UserTabs />
                <CommentList />
                <Footer />
            </MainLayout>
        </ThemeProvider>
    );
}

export default App;
