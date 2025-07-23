import { useGetUsersQuery } from '../api';
import css from './Users.module.css';
import { useNavigate } from 'react-router';
import { Button } from '../../../shared';

export function Users() {
    const { data: user = [], isLoading } = useGetUsersQuery();
    const navigate = useNavigate();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className={css.wrapper}>
            {<h3>Список пользователей:</h3>}
            {user.map((user) => (
                <div key={user.id} className={css.content}>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                        <div className={css.name}> {user.username}</div>
                        <Button
                            className={css.id}
                            onClick={() => {
                                navigate(`/users/${user.id}`);
                            }}
                            text={`Перейти к пользователю с ID ${user.id}`}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}
