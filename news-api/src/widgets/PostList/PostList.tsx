import type { Post } from '../../entities';
import { PostCard } from '../../entities';
import css from './PostList.module.css';
import { ItemList } from '../../shared/ui/ItemList/ItemList.tsx';

type Props = {
    posts: Post[];
};

export function PostList({ posts }: Props) {
    return (
        <ItemList<Post>
            items={posts}
            keyExtractor={(post) => post.id}
            renderItem={(post) => <PostCard postInfo={post} />}
            className={css.list}
            childrenClassName={css.post}
        />
    );
}
