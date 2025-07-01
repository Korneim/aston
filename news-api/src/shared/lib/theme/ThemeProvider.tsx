import { type FC, type ReactNode, useCallback, useState } from 'react';
import { ThemeContext } from './useTheme';

type Props = {
    children: ReactNode;
};

export const ThemeProvider: FC<Props> = ({ children }) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const toggleTheme = useCallback(() => {
        if (theme === 'light') {
            setTheme('dark');
        } else setTheme('light');
    }, [theme]);

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
