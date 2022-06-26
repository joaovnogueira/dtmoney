import { Container } from "./styles";

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg'
import { useTransactions } from "../../hooks/useTransactionsContext";

export function Summary(){
    const { transactions } = useTransactions();

    const totalDeposits = transactions.reduce((acc, transaction) => {
        if(transaction.type == 'deposit') {
            return acc + transaction.amount;
        }

        return acc + transaction.amount;
    }, 0)

    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saídas" />
                </header>
                <strong>- R$1000,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>R$1000,00</strong>
            </div>
        </Container>
    );
}