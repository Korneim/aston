import { Link } from 'react-router';
import { routes } from '../../app/provider/router/lib/routes.ts';
import css from './UserTabs.module.css';

export function UserTabs() {
    const { users, posts, root } = routes;
    return (
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
            <Link to={users} className={css.tabs}>
                Пользователи
            </Link>
            <Link to={posts} className={css.tabs}>
                Посты
            </Link>
            <Link to={root} className={css.tabs}>
                Главная
            </Link>
        </div>
    );
}
