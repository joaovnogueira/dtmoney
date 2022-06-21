import { Summary } from "../summary";
import { TransactionsTable } from "../transacationsTable";
import { Container } from "./styles";

export function Dashboard (){
    return (
        <Container>
            <Summary />
            <TransactionsTable />
        </Container>
    );
}