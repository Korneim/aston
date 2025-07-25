import { PostCard } from '../../entities';
import css from './PostList.module.css';
import { ItemList } from '../../shared/ui/ItemList/ItemList.tsx';
import type { JSX } from 'react';
import type { Post } from '../../entities/post/model';

type Props = {
    posts: Post[];
};

export function PostList({ posts }: Props): JSX.Element {
    return (
        <ItemList<Post>
            items={posts}
            keyExtractor={(post: Post) => post.id}
            renderItem={(post: Post) => <PostCard postInfo={post} />}
            className={css.list}
            childrenClassName={css.post}
        />
    );
}
