import { createBrowserRouter, Outlet } from 'react-router';
import type { FC } from 'react';
import { routes } from './lib/routes.ts';
import { RouterProvider } from 'react-router/dom';
import App from '../../App.tsx';
import { AlbumsPage, Posts, UserPage, UserPostsPage, UsersPage, UserTodosPage } from '../../../pages';
import { Todos } from '../../../entities';
import { UserAlbumsPage } from '../../../pages/userAlbums/ui/UserAlbumsPage.tsx';
import { AlbumPhotos } from '../../../entities/albumPhotos/ui/AlbumPhotos.tsx';

const { root, users, userTodos, userAlbums, post, posts, userPosts, albumPhotos, user, todos, albums } = routes;

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
                    element: <UserTodosPage />,
                },

                {
                    path: userAlbums,
                    element: <UserAlbumsPage />,
                },
                {
                    path: todos,
                    element: <Todos />,
                },
                {
                    path: albums,
                    element: <AlbumsPage />,
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
                    element: <UserPostsPage />,
                },

                {
                    path: albumPhotos,
                    element: <AlbumPhotos />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};
