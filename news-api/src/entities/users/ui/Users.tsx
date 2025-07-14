import { useGetUsersQuery } from '../api';
import css from './Users.module.css';

export function Users() {
    const { data: user = [], isLoading } = useGetUsersQuery();
    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className={css.wrapper}>
            {<h3>Список пользователей:</h3>}
            {user.map((user) => (
                <div key={user.id} className={css.content}>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                        <div className={css.name}>UserName: {user.username},</div>
                        <div className={css.id}> ID :{user.id}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}
