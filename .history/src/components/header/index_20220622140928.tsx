import { useState } from 'react';
import Modal from 'react-modal';
import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

export function Header (){
    

    return(
        <Container>
            <Content>
                <img src={logoImg} alt="dtmoney" />
                <button type="button" onClick={handleOpenNewTransactionModal}>
                    Nova transação
                </button>
            </Content>
        </Container>
    );
}