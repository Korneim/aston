import { Button } from '../../../shared';
import { useCallback, useState } from 'react';
import css from './CommentList.module.css';
import type { Comments } from '../../../entities/comments/api/commentsApi.ts';

interface Props {
    comments: Comments[]; // Переименовал data в comments для ясности
    isLoading: boolean;
}

export function CommentList({ comments, isLoading }: Props) {
    const [showComments, setShowComments] = useState(false);

    const handleClick = useCallback(() => {
        setShowComments(!showComments);
    }, [showComments]);
    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className={css.container}>
            <Button
                className={css.button}
                text={showComments ? 'Скрыть комментарии' : 'Показать комментарии'}
                onClick={handleClick}
            />
            <div className={showComments ? css.display : css.hidden}>
                {comments.map((comment) => (
                    <div key={comment.id} className={css.comment}>
                        <div className={css.commentAuthor}>{comment.name}</div>
                        <div className={css.commentBody}>{comment.body}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
