import * as React from 'react';
import { useState } from 'react';
import css from './AlbumsPage.module.css';
import { useGetAlbumsQuery } from '../api/albumsApi.ts';
import { useNavigate } from 'react-router';

export function Albums() {
    const [albumsFilters, setAlbumsFiltersFilters] = useState<{
        userId?: number;
        completed?: boolean;
        limit: number;
    }>({ limit: 100 });

    const { data: albums = [], isLoading } = useGetAlbumsQuery(albumsFilters);

    const handleUserIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setAlbumsFiltersFilters((prev) => ({
            ...prev,
            userId: value ? Number(value) : undefined,
        }));
    };

    const navigate = useNavigate();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className={css.wrapper}>
            <div className={css.filters}>
                <div>
                    <label>Фильтр по ID пользователя: </label>
                    <input
                        type="number"
                        value={albumsFilters.userId || ''}
                        onChange={handleUserIdChange}
                        placeholder="Все пользователи"
                        min="1"
                    />
                </div>
            </div>

            <h3>Список альбомов пользователей:</h3>
            {albums.map((album) => (
                <div
                    key={album.id}
                    className={css.content}
                    onClick={() => {
                        navigate(`/users/${album.userId}/albums`);
                    }}
                >
                    <div className={css.uIds}>
                        <div style={{ color: 'red', width: '200px' }}>ID пользователя:{album.userId}</div>
                        <div className={css.name}>Альбом: {album.title}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}
