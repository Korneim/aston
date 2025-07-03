import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import { Button } from '../Button';

type Props = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
};

export function Modal({ isOpen, onClose, children }: Props) {
    if (!isOpen) {
        return null;
    }
    return createPortal(
        <div className={!isOpen ? css.modal : css['modal-open']} onClick={onClose}>
            <div className={css.content}>
                {children}
                <Button onClick={onClose} className={css.close} text="Закрыть" />
            </div>
        </div>,
        document.body
    );
}
