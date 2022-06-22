import { Container } from "./styles";
import Modal from 'react-modal';
import { useState } from "react";

const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false); 

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, OnRequestClose}: NewTransactionModal){
    return(
        <Modal 
            isOpen={isOpen} 
            onRequestClose={handleCloseNewTransactionModal}
        >
            <h2>Cadastrar transação</h2>
        </Modal>
    );
}