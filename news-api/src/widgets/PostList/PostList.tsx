import { PostCard } from '../../entities';
import { MOCK_DATA } from './lib';
import css from './post-list.module.css';

export function PostList() {
    return (
        <div className={css.list}>
            {MOCK_DATA.map((el) => (
                <PostCard key={el.title} postInfo={el} />
            ))}
        </div>
    );
}
