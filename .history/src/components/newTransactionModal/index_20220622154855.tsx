import { Container } from "./styles";
import Modal from 'react-modal';
import closeImg from '../../assets/c'

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
            className="react-modal-content"
        >
            <button type="button" onClick={onRequestClose}>
                <img src="closeImg" alt="Fechar modal" />
            </button>
            <Container>
                <h2>Cadastrar transação</h2>

                <input placeholder="Título"/>
                <input type="number" placeholder="Valor"/>
                <input placeholder="Categoria"/>
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    );
}