import { Link, useParams } from 'react-router';
import { useGetUserByIDQuery } from '../../../entities';
import { type MapUser, mapUserInfo } from '../../../entities/users/lib/mapUserInfo.ts';

const userFieldsRu: Record<string, string> = {
    id: 'ID',
    name: 'Имя',
    username: 'Никнейм',
    email: 'Email',
    address: 'Адрес', // Оставляем как есть, но не раскрываем вложенные поля
    phone: 'Телефон',
    website: 'Сайт',
    company: 'Компания', // Оставляем как есть
};

export function UserPage() {
    const { id } = useParams();
    const { data, isLoading } = useGetUserByIDQuery(Number(id));
    console.log(data);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    const mappedData: MapUser = mapUserInfo(data);

    return (
        <>
            <h3 style={{ textAlign: 'center' }}>Страница пользователя с ID {id}</h3>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid #ccc' }}>
                    {data &&
                        Object.keys(mappedData).map((key) => {
                            return (
                                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                    <div style={{ width: '100px' }}>{userFieldsRu[key]}</div>
                                    <div style={{ width: '300px' }}>{mappedData?.[key as keyof MapUser]}</div>
                                </div>
                            );
                        })}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Link to={`/users/${id}/albums`}>Перейти в альбомы</Link>
                    <Link to={`/users/${id}/posts`}>Перейти в посты</Link>
                    <Link to={`/users/${id}/todos`}>Перейти в лист задач</Link>
                </div>
            </div>
        </>
    );
}
