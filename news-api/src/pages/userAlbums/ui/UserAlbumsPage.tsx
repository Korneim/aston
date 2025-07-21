import { useNavigate, useParams } from 'react-router';
import { useGetAlbumsQuery } from '../../../entities';
import css from './UserAlbumsPage.module.css';

export function UserAlbumsPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    const filters = {
        limit: 100,
        userId: Number(id),
        page: undefined,
    };
    const { data: list = [], isLoading } = useGetAlbumsQuery(filters);

    if (isLoading) {
        return (
            <div className={css.loadingContainer}>
                <div className={css.spinner}></div>
                <p>Загружаем альбомы...</p>
            </div>
        );
    }

    return (
        <div className={css.container}>
            <header className={css.header}>
                <h1 className={css.title}>
                    Альбомы пользователя <span className={css.userId}>#{id}</span>
                </h1>
                <div className={css.albumsCount}>Всего альбомов: {list.length}</div>
            </header>

            <div className={css.albumsContainer}>
                {list.map((album) => (
                    <div key={album.id} className={css.albumCard}>
                        <div className={css.albumContent}>
                            <div className={css.albumHeader}>
                                <span className={css.albumId}>Альбом #{album.id}</span>
                                <span className={css.viewPhotos} onClick={() => navigate(`/albums/${album.id}/photos`)}>
                                    Просмотр фото →
                                </span>
                            </div>
                            <h3 className={css.albumTitle}>{album.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
