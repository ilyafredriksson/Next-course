'use client';

import { Modal,ModalContent,ModalHeader,ModalBody } from "@heroui/modal";
import React from "react";

interface IProps {
    isOpen: boolean;
    onClose: () => void;
    size?: 'xs'|'sm' | 'md' | 'lg' | 'xl';
    tittle: string;
    children: React.ReactNode;
}

const CustomModal =({
    isOpen,
    onClose,
    size='xs',
    tittle,
    children
}:IProps
) => {
    return (<Modal isOpen={isOpen} onOpenChange={(open) => !open && onClose()} size={size}>
        <ModalContent>
            <ModalHeader className="border-b">
                <h3 className="text-xl text-background font-semibold">{tittle}</h3>
                </ModalHeader>
                        <ModalBody className="space-y-4 py-6">{children}</ModalBody>
                </ModalContent>
            </Modal>);
}

export default CustomModal;