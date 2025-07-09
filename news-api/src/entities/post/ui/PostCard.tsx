import css from './PostCard.module.css';
import type { Post } from '../../../mock';

type Props = {
    postInfo: Post;
};

export function PostCard({ postInfo }: Props) {
    const { userId, title, body } = postInfo;

    return (
        <div className={css.post}>
            <h2>{title}</h2>
            <div>Автор: {userId}</div>
            <div>{body}</div>
        </div>
    );
}
