import { createContext, useContext } from 'react';

type ThemeContextProviderProps = {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextProviderProps>({
    theme: 'light',
    toggleTheme: () => {},
});

export const useTheme = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return { theme, toggleTheme };
};
