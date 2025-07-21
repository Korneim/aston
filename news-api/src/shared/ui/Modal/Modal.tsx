import * as React from 'react';
import { type ReactNode, type ReactPortal } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import { Header } from './Header/Header.tsx';
import { Footer } from './Footer/Footer.tsx';
import { Body } from './Body/Body.tsx';

type Props = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
};

export function Modal({ isOpen, onClose, children }: Props): ReactPortal | null {
    const handleClose = (event: React.MouseEvent): void => {
        event.stopPropagation();
    };

    if (!isOpen) {
        return null;
    }

    return createPortal(
        <div className={!isOpen ? css.modal : css['modal-open']} onClick={onClose}>
            <div className={css.content} onClick={handleClose}>
                {children}
            </div>
        </div>,
        document.body
    );
}

Modal.Header = Header;
Modal.Footer = Footer;
Modal.Body = Body;
