import Modal from "react-modal";
import { useState } from "react";

import { GlobalStyle } from "./styles/global";

import { Dashboard } from "./components/dashboard";
import { Header } from "./components/header";
import { NewTransactionModal } from "./components/newTransactionModal";
import { TransactionsContext } from "./TransactionsContext";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false); 
  const [transactions, setTransactions] = useState<Transaction[]>()



  function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false);
  }

  return (
      <TransactionsContext.Provider value={[]}>
        <GlobalStyle/>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
        <NewTransactionModal 
            onRequestClose={handleCloseNewTransactionModal}
            isOpen={isNewTransactionModalOpen}
        />
        <Dashboard/>
      </TransactionsContext.Provider>
    
  );
}

