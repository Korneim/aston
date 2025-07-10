import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Router, store } from './app';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            {/*<App />*/}
            <Router />
        </Provider>
    </StrictMode>
);
