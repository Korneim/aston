import { Link, useParams } from 'react-router';

export function UserPage() {
    const { id } = useParams();

    return (
        <div>
            <h3>Страница пользователя с ID {id}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Link to={`/users/${id}/albums`}>Перейти в альбомы</Link>
                <Link to={`/users/${id}/posts`}>Перейти в посты</Link>
                <Link to={`/users/${id}/todos`}>Перейти в лист задач</Link>
            </div>
        </div>
    );
}
