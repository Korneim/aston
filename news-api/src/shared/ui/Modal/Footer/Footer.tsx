import type { JSX, PropsWithChildren } from 'react';
import css from '../Modal.module.css';
import { Button } from '../../Button';

type Props = {
    onClose?: () => void;
};

export function Footer({ children, onClose }: PropsWithChildren<Props>): JSX.Element {
    return (
        <div className={css.footer}>
            {children}
            <Button onClick={onClose} className={css.close} text="Закрыть" />
        </div>
    );
}
