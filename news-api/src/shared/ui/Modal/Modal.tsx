import * as React from 'react';
import { type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import { Header } from './Header/Header.tsx';
import { Footer } from './Footer/Footer.tsx';
import { Body } from './Body/Body.tsx';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
};

type ModalComponent = React.FC<ModalProps> & {
    Header: typeof Header;
    Body: typeof Body;
    Footer: typeof Footer;
};

const handleClose = (event: React.MouseEvent): void => {
    event.stopPropagation();
};

const ModalComponent: ModalComponent = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        return null;
    }

    return createPortal(
        <div className={isOpen ? css['modal-open'] : css.modal} onClick={onClose}>
            <div className={css.content} onClick={handleClose}>
                {children}
            </div>
        </div>,
        document.body
    );
};

ModalComponent.Header = Header;
ModalComponent.Body = Body;
ModalComponent.Footer = Footer;

export const Modal = ModalComponent;
