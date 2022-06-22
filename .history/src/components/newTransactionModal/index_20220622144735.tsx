import { Container } from "./styles";
import Modal from 'react-modal';
import { useState } from "react";

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
    return(
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            cons
        >
            <Container>
                <h2>Cadastrar transação</h2>
                <input type="text" placeholder="Título"/>
                <input type="number" placeholder="Valor"/>
                <input type="text" placeholder="Categoria"/>
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    );
}