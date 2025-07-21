import css from './Users.module.css';
import { useNavigate } from 'react-router';
import { Button } from '../../../shared';
import { useSelector } from 'react-redux';
import { selectAllUsers } from '../model';
import { useGetUsersQuery } from '../api';
import type { JSX } from 'react';

export function Users(): JSX.Element {
    const { isLoading } = useGetUsersQuery();
    const navigate = useNavigate();
    const myData = useSelector(selectAllUsers);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className={css.wrapper}>
            <h3>Список пользователей:</h3>
            {myData.map((user) => (
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
