import type { FC } from 'react';
import { useTheme } from '../lib';
import { Footer, Header } from '../../widgets';
import { Outlet } from 'react-router';
import { UserTabs } from '../../widgets/UserTabs/UserTabs.tsx';

export const MainLayout: FC = () => {
    const { theme } = useTheme();

    return (
        <div
            style={{
                background: theme === 'light' ? 'white' : 'black',
                color: theme === 'light' ? 'black' : 'white',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
            }}
        >
            <Header />
            <UserTabs />
            <Outlet />
            <Footer />
        </div>
    );
};
