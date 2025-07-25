import { ModalTriggerButton, ThemeSwitcher } from '../../features';
import css from './Header.module.css';
import { useTheme } from '../../shared';
import type { JSX } from 'react';

export function Header(): JSX.Element {
    const { theme } = useTheme();
    return (
        <div className={theme === 'light' ? css.container : css.dark}>
            <ThemeSwitcher />
            <ModalTriggerButton />
        </div>
    );
}
