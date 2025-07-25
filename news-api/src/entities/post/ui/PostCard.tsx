import { CommentList } from '../../../widgets';
import { useGetCommentIDQuery } from '../../comments';
import type { JSX } from 'react';
import type { Post } from '../model';

type Props = {
    postInfo: Post;
};

export function PostCard({ postInfo }: Props): JSX.Element {
    const { userId, title, body, id } = postInfo;
    const { data, isLoading } = useGetCommentIDQuery(Number(id));

    return (
        <>
            <h2>{title}</h2>
            <div>Автор: {userId}</div>
            <div>{body}</div>
            <CommentList comments={data || []} isLoading={isLoading} />
        </>
    );
}
