import { Button } from '../../../shared';
import { useCallback, useState } from 'react';
import css from './CommentList.module.css';

export function CommentList() {
    const [showComments, setShowComments] = useState(false);

    const handleClick = useCallback(() => {
        setShowComments(!showComments);
    }, [showComments]);

    return (
        <div className={css.container}>
            <Button
                className={css.button}
                text={showComments ? 'Скрыть комментарии' : 'Показать комментарии'}
                onClick={handleClick}
            />
            <div className={showComments ? css.display : css.hidden}></div>
        </div>
    );
}
