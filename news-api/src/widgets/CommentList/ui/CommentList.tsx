import { Button } from '../../../shared';
import { type JSX, useCallback, useState } from 'react';
import css from './CommentList.module.css';
import type { Comments } from '../../../entities';

interface Props {
    comments: Comments[];
    isLoading: boolean;
}

export function CommentList({ comments, isLoading }: Props): JSX.Element {
    const [showComments, setShowComments] = useState(false);

    const handleClick = useCallback((): void => {
        setShowComments(!showComments);
    }, [showComments]);
    if (isLoading) {
        return <div className={css.loading}>Loading...</div>;
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
