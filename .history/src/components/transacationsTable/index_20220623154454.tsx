import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable(){
    const [transactions, setTransactions] = useState([]);

    useEffect (() => {
        api.get('transactions')
            .then(response => setTransactions(response.data))
    }, []);

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => {
                        return(
                            <tr>
                                <td>{transaction.title}</td>
                                <td className="deposit">{transaction.amount}</td>
                                <td>{transaction.category}</td>
                                <td>20/06/2022</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            
        </Container>
    );
}