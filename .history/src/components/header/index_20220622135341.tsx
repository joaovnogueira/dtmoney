import { useState } from 'react';
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

export function Header (){
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false); 

    function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal(){
        setIsNewTransactionModalOpen(false);
    }

    return(
        <Container>
            <Content>
                <img src={logoImg} alt="dtmoney" />
                <button type="button" onC>
                    Nova transação
                </button>
            </Content>
        </Container>
    );
}