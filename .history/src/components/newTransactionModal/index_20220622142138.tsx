import { Container } from "./styles";
import Modal from 'react-modal';
import { useState } from "react";

const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false); 

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal(){
    return(
        <Modal 
            isOpen={isNewTransactionModalOpen} 
            onRequestClose={handleCloseNewTransactionModal}
        >
            <h2>Cadastrar transação</h2>
        </Modal>
    );
}