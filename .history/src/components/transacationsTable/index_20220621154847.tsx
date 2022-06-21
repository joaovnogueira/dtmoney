import { Container } from "./styles";

export function TransactionsTable(){
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
            </table>

            <tbody>
               <tr>
                    <td>Desenvolvimento de website</td>
                    <td>R</td>
                </tr> 
            </tbody>
        </Container>
    );
}