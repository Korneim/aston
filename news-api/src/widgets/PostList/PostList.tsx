import { PostCard } from '../../entities';
import { MOCK_DATA } from '../../mock';
import css from './PostList.module.css';

export function PostList() {
    return (
        <div className={css.list}>
            {MOCK_DATA.map((el) => (
                <PostCard key={el.title} postInfo={el} />
            ))}
        </div>
    );
}
