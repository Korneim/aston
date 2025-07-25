import css from './PostLengthFilter.module.css';
import type { ChangeEvent, JSX } from 'react';

type Props = {
    titleLength: number | null;
    onTitleLengthChange: (length: number | null) => void;
};

export function PostLengthFilter({ titleLength, onTitleLengthChange }: Props): JSX.Element {
    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const newLength = Number(event.target.value) || null;
        onTitleLengthChange(newLength);
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
