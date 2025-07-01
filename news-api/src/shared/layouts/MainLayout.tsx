import type { FC } from 'react';
import { Header } from '../../widgets';
import { Footer } from '../../widgets';
import { PostList } from '../../widgets/PostList';

export const MainLayout: FC = () => {
    return (
        <>
            <Header />
            <PostList />
            <Footer />
        </>
    );
};
