import { Link, useParams } from 'react-router';
import { useGetUserByIDQuery } from '../../../entities';
import { type MapUser, mapUserInfo } from '../../../entities/users/lib/mapUserInfo.ts';
import css from './UserPage.module.css';
import { ItemList } from '../../../shared/ui/ItemList/ItemList.tsx';
import type { UserField } from '../model';

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
    const userItems = Object.entries(mappedData).map(([key, value]) => ({
        label: userFieldsRu[key as keyof typeof userFieldsRu] ?? key,
        value: String(value),
    }));

    return (
        <div className={css.container}>
            <h1 className={css.header}>Профиль пользователя #{id}</h1>

            <div className={css.content}>
                <div className={css.userInfo}>
                    <ItemList<UserField>
                        items={userItems}
                        keyExtractor={(item) => item.label}
                        renderItem={(item) => (
                            <div className={css.infoRow}>
                                <div className={css.infoLabel}>{item.label}</div>
                                <div className={css.infoValue}>{item.value}</div>
                            </div>
                        )}
                    />
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
