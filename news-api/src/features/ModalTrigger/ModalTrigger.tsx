import { useState } from 'react';
import { Button, Modal } from '../../shared';

export const ModalTriggerButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setIsOpen(true)} text="О проекте" />
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div>Данный проект был создан в рамках обучения на платформе компании Aston</div>
            </Modal>
        </>
    );
};
