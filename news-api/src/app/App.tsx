import { ThemeProvider } from '../shared';
import { Router } from './provider';
import type { JSX } from 'react';

function App(): JSX.Element {
    return (
        <ThemeProvider>
            <Router />
        </ThemeProvider>
    );
}

export default App;
