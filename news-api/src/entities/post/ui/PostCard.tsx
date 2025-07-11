import css from './PostCard.module.css';
import type { Post } from '../../../mock';

type Props = {
    postInfo: Post;
};

export function PostCard({ postInfo }: Props) {
    const { author, title, description } = postInfo;

    return (
        <div className={css.post}>
            <h2>{title}</h2>
            <div>Автор: {author}</div>
            <div>{description}</div>
        </div>
    );
}
