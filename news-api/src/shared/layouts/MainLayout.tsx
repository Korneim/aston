import type { FC } from 'react';
import { Footer, Header } from '../../widgets';
import { PostList } from '../../widgets/PostList';
import { useTheme } from '../lib';

export const MainLayout: FC = () => {
    const { theme } = useTheme();

    return (
        <div
            style={{ background: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white' }}
        >
            <Header />
            <PostList />
            <Footer />
        </div>
    );
};
