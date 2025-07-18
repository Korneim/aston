import { PostCard } from '../../entities';
import css from './PostList.module.css';
import type { Post } from '../../entities/post/api/postApi.ts';

type Props = {
    posts: Post[];
};

export function PostList({ posts }: Props) {
    return (
        <div className={css.list}>
            {posts.map((el) => (
                <PostCard key={el.title} postInfo={el} />
            ))}
        </div>
    );
}
