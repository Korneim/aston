import userAlbum from '../../assets/pictures/albums.jpg';
import { useParams } from 'react-router';
import css from './Albums.module.css';

export function AlbumsPage() {
    const { id } = useParams();
    return (
        <div>
            <h3> Это пользовательский ID{id}</h3>
            <div className={css.content}>
                <img src={userAlbum} alt="userAlbum" className={css.image} />
            </div>
        </div>
    );
}
