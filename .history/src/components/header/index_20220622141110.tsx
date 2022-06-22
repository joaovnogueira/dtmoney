import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';


interface HeaderProps{
    onOpenNewTransactionModal
}

export function Header (props){
    

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