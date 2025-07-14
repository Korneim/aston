import { NavLink } from 'react-router';
import { routes } from '../../app/provider/router/lib/routes.ts';
import css from './UserTabs.module.css';

export function UserTabs() {
    const { users, posts, root } = routes;
    return (
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
            <NavLink to={users} className={css.tabs}>
                Пользователи
            </NavLink>
            <NavLink to={posts} className={css.tabs}>
                Посты
            </NavLink>
            <NavLink to={'/albums/:2/photos'} className={css.tabs}>
                Альбомы
            </NavLink>
            <NavLink to={root} className={css.tabs}>
                Главная
            </NavLink>
        </div>
    );
}
