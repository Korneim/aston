import css from './PostCard.module.css';
import type { Post } from '../api/postApi.ts';
import { CommentList } from '../../../widgets';
import { useGetCommentIDQuery } from '../../comments/api/commentsApi.ts';

type Props = {
    postInfo: Post;
};

export function PostCard({ postInfo }: Props) {
    const { userId, title, body, id } = postInfo;
    const { data, isLoading } = useGetCommentIDQuery(Number(id));
    console.log(data, isLoading);

    return (
        <div className={css.post}>
            <h2>{title}</h2>
            <div>Автор: {userId}</div>
            <div>{body}</div>
            <CommentList comments={data || []} isLoading={isLoading} />
        </div>
    );
}
