import { GlobalStyle } from "./assets/styles/global";
import { Dashboard } from "./components/dashboard";
import { Header } from "./components/header";
import { TransactionsTable } from "./components/transacationsTable";

export function App() {
  return (
      <>
        <GlobalStyle/>
        <Header/>
        <Dashboard/>
        <TransactionsTable />
      </>
    
  );
}

