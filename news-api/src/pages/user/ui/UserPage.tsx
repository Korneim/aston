import { Link, useParams } from 'react-router';
import { useGetUserByIDQuery } from '../../../entities';
import { type MapUser, mapUserInfo } from '../../../entities/users/lib/mapUserInfo.ts';
import css from './UserPage.module.css';

const userFieldsRu: Record<string, string> = {
    id: 'ID',
    name: 'Имя',
    username: 'Никнейм',
    email: 'Email',
    address: 'Адрес',
    phone: 'Телефон',
    website: 'Сайт',
    company: 'Компания',
};

export function UserPage() {
    const { id } = useParams();
    const { data, isLoading } = useGetUserByIDQuery(Number(id));
    console.log(data);

    if (isLoading) {
        return <div className={css.loading}>Loading...</div>;
    }
    const mappedData: MapUser = mapUserInfo(data);

    return (
        <div className={css.container}>
            <h1 className={css.header}>Профиль пользователя #{id}</h1>

            <div className={css.content}>
                <div className={css.userInfo}>
                    {data &&
                        Object.keys(mappedData).map((key) => (
                            <div key={key} className={css.infoRow}>
                                <div className={css.infoLabel}>{userFieldsRu[key]}</div>
                                <div className={css.infoValue}>{mappedData[key as keyof MapUser]}</div>
                            </div>
                        ))}
                </div>

                <div className={css.links}>
                    <Link to={`/users/${id}/albums`} className={css.link}>
                        Альбомы пользователя
                    </Link>
                    <Link to={`/users/${id}/posts`} className={css.link}>
                        Посты пользователя
                    </Link>
                    <Link to={`/users/${id}/todos`} className={css.link}>
                        Задачи пользователя
                    </Link>
                </div>
            </div>
        </div>
    );
}
