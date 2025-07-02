import { ThemeSwitcher } from '../../features';
import css from './Header.module.css';
import { useTheme } from '../../shared';

export function Header() {
    const { theme } = useTheme();
    return (
        <div className={theme === 'light' ? css.container : css.dark}>
            <ThemeSwitcher />
        </div>
    );
}
