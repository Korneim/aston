import type { JSX } from 'react';

export function MainPage(): JSX.Element {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <h1>Добро пожаловать!</h1>
        </div>
    );
}
