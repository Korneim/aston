import { type PropsWithChildren, useCallback, useState } from 'react';
import { ThemeContext } from './useTheme';

export const ThemeProvider = ({ children }: PropsWithChildren) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const toggleTheme = useCallback(() => {
        if (theme === 'light') {
            setTheme('dark');
        } else setTheme('light');
    }, [theme]);

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
