import { MainLayout, ThemeProvider } from '../shared';
import { Footer, Header, UserTabs } from '../widgets';
import { MainPage } from '../pages';

function App() {
    return (
        <ThemeProvider>
            <MainLayout>
                <Header />
                <UserTabs />
                <MainPage />
                <Footer />
            </MainLayout>
        </ThemeProvider>
    );
}

export default App;
