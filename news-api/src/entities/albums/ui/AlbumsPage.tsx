import * as React from 'react';
import { type JSX, useState } from 'react';
import css from './AlbumsPage.module.css';
import { useGetAlbumsQuery } from '../api';
import { useNavigate } from 'react-router';
import type { Album, AlbumsFilters } from '../model';
import { ItemList } from '../../../shared/ui/ItemList/ItemList.tsx';

export function Albums(): JSX.Element {
    const [albumsFilters, setAlbumsFiltersFilters] = useState<AlbumsFilters>({ limit: 100 });

    const { data: albums = [], isLoading } = useGetAlbumsQuery(albumsFilters);

    const handleUserIdChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value: string = e.target.value;
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
            <ItemList<Album>
                items={albums}
                keyExtractor={(album) => album.id}
                className={css.list}
                childrenClassName={css.content}
                renderItem={(album) => (
                    <div
                        className={css.content}
                        onClick={() => {
                            navigate(`/users/${album.userId}/albums`);
                        }}
                    >
                        <div className={css.uIds}>
                            <div style={{ color: 'red', width: '200px' }}>ID пользователя: {album.userId}</div>
                            <div className={css.name}>Альбом: {album.title}</div>
                        </div>
                    </div>
                )}
            />
        </div>
    );
}
