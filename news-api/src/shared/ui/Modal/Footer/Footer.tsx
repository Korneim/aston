import type { ReactNode } from 'react';
import css from '../Modal.module.css';
import { Button } from '../../Button';

type Props = {
    children?: ReactNode;
    onClose?: () => void;
};

export function Footer({ children, onClose }: Props) {
    return (
        <div className={css.footer}>
            {children}
            <Button onClick={onClose} className={css.close} text="Закрыть" />
        </div>
    );
}
