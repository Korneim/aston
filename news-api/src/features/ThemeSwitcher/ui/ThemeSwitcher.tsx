import { useTheme } from '../../../shared';

export function ThemeSwitcher() {
    const { theme, toggleTheme } = useTheme();

    return <button onClick={toggleTheme}>set {theme === 'light' ? 'dark' : 'light'} theme</button>;
}
