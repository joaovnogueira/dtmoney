import { GlobalStyle } from "./assets/styles/global";
import { Dashboard } from "./components/dashboard";
import { Header } from "./components/header";

export function App() {
  return (
      <>
        <GlobalStyle/>
        <Header/>
        <Dashboard/>
        <TransactionsTable /></TransactionsTable>
      </>
    
  );
}

