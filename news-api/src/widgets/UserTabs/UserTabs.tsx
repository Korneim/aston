import { NavLink } from 'react-router';
import { routes } from '../../app/provider/router/lib/routes.ts';
import css from './UserTabs.module.css';
import type { JSX } from 'react';

export function UserTabs(): JSX.Element {
    const { users, posts, root, todos, albums } = routes;
    return (
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
            <NavLink to={users} className={css.tabs}>
                Пользователи
            </NavLink>
            <NavLink to={posts} className={css.tabs}>
                Посты
            </NavLink>
            <NavLink to={albums} className={css.tabs}>
                Альбомы
            </NavLink>
            <NavLink to={root} className={css.tabs}>
                Главная
            </NavLink>
            <NavLink to={todos} className={css.tabs}>
                Лист задач
            </NavLink>
        </div>
    );
}
