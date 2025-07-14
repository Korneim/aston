import { createBrowserRouter, Outlet } from 'react-router';
import type { FC } from 'react';
import { routes } from './lib/routes.ts';
import { RouterProvider } from 'react-router/dom';
import App from '../../App.tsx';
import { AlbumsPage, Posts, UsersPage } from '../../../pages';
import { UserPage } from '../../../pages/user/ui/UserPage.tsx';

const { root, users, userTodos, userAlbums, post, posts, userPosts, albumPhotos, user } = routes;

export const Router: FC = () => {
    const router = createBrowserRouter([
        {
            element: <Outlet />,
            children: [
                {
                    path: root,
                    element: <App />,
                },
                {
                    path: users,
                    element: <UsersPage />,
                },
                {
                    path: user,
                    element: <UserPage />,
                },

                {
                    path: userTodos,
                    element: <div>userTodos</div>,
                },

                {
                    path: userAlbums,
                    element: <div>userAlbums</div>,
                },

                {
                    path: post,
                    element: <div>post</div>,
                },

                {
                    path: posts,
                    element: <Posts />,
                },

                {
                    path: userPosts,
                    element: <div>userPosts</div>,
                },

                {
                    path: albumPhotos,
                    element: <AlbumsPage />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};
