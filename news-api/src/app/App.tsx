import { MainLayout, ThemeProvider } from '../shared';
import { Footer, Header } from '../widgets';
import { UserTabs } from '../widgets/UserTabs/UserTabs.tsx';

function App() {
    return (
        <ThemeProvider>
            <MainLayout>
                <Header />
                <UserTabs />
                <Footer />
            </MainLayout>
        </ThemeProvider>
    );
}

export default App;
