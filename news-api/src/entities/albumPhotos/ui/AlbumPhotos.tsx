import { useParams } from 'react-router';
import { useGetAlbumsPhotosQuery } from '../../albums/api/albumsApi.ts';
import css from './AlbumPhotos.module.css';

export function AlbumPhotos() {
    const { id } = useParams();

    const { data: list = [], isLoading } = useGetAlbumsPhotosQuery({ limit: 100, id: Number(id) });
    if (isLoading) {
        return <div>Loading...</div>;
    }
    const replaceUrl = (url: string) => {
        return url?.replace(/(https:\/\/via\.placeholder\.com)(\/(\d+)\/([^/]+))/, 'https://placehold.co$2/FFF');
    };
    return (
        <div className={css.container}>
            <h2 className={css.title}>Фотографии альбома #{id}</h2>

            <div className={css.photos}>
                {list.map((photo) => {
                    const newUrl = replaceUrl(photo.url);
                    const newThumbnailUrl = replaceUrl(photo.thumbnailUrl);

                    return (
                        <div key={photo.id} className={css.photoCard}>
                            <img
                                src={newThumbnailUrl}
                                alt={photo.title}
                                className={css.thumbnail}
                                onClick={() => window.open(newUrl, '_blank')}
                            />
                            <p className={css.photoTitle}>{photo.title}</p>
                            <span className={css.photoId}>ID: {photo.id}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
