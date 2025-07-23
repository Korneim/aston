import { ThemeProvider } from '../shared';
import { Router } from './provider';

function App() {
    return (
        <ThemeProvider>
            <Router />
        </ThemeProvider>
    );
}

export default App;
