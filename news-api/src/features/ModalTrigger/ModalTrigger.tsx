import { useState } from 'react';
import { Button, Modal } from '../../shared';

export const ModalTriggerButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setIsOpen(true)} text="О проекте" />
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <Modal.Header>
                    <h2>Это футер модального окна</h2>
                </Modal.Header>
                <Modal.Body>
                    <div>А это боди. Данный проект был создан в рамках обучения на платформе компании Aston</div>
                </Modal.Body>
                <Modal.Footer onClose={() => setIsOpen(false)}>Это футер c кнопкой</Modal.Footer>
            </Modal>
        </>
    );
};
