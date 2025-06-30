import type { FC } from 'react';
import {Header} from "../../widgets/LayoutHeader/Header.tsx";
import {Footer} from "../../widgets/ LayoutFooter/Footer.tsx";
import {PostList} from "../../widgets/PostList/PostList.tsx";

export const MainLayout: FC = () => {
    return (
        <>
            <Header />
            <PostList />
            <Footer />
        </>
    );
};
