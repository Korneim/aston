import type { FC, ReactNode } from 'react';
import { Footer, Header } from '../../widgets';
import { useTheme } from '../lib';

type Props = {
    children: ReactNode;
};

export const MainLayout: FC<Props> = ({ children }) => {
    const { theme } = useTheme();

    return (
        <div
            style={{ background: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white' }}
        >
            <Header />
            {children}
            <Footer />
        </div>
    );
};
