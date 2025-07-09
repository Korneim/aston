import type { Post } from '../../../mock';
import { type ChangeEvent, useState } from 'react';
import { filterByLength } from '../lib';
import css from './PostLengthFilter.module.css';

type Props = {
    posts: Post[];
    handleChangePosts: (posts: Post[]) => void;
};

export function PostLengthFilter({ posts, handleChangePosts }: Props) {
    const [titleLength, setTitleLength] = useState<number | null>(null);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newLength = Number(event.target.value) || null;
        setTitleLength(newLength);
        const filteredPosts = filterByLength(posts, newLength);
        handleChangePosts(filteredPosts);
    };

    return (
        <div className={css.block}>
            Фильтр
            <div className={css.filter}>
                <div>Введите максимальную длину заголовка</div>
                <input id="titleLength" type="text" value={titleLength ?? ''} onChange={handleChange} />
            </div>
        </div>
    );
}
