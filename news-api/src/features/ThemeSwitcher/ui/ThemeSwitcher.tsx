import type { JSX } from 'react';
import { useTheme } from '../../../shared';

export function ThemeSwitcher(): JSX.Element {
    const { theme, toggleTheme } = useTheme();

    return <button onClick={toggleTheme}>set {theme === 'light' ? 'dark' : 'light'} theme</button>;
}
