import { GlobalStyle } from "./assets/styles/global";
import { Dashboard } from "./components/dashboard";
import { Header } from "./components/header";
import Modal from "react-modal";
import { useState } from "react";
import { NewTransactionModal } from "./components/newTransactionModal";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false); 

  function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false);
  }

  return (
      <>
        <GlobalStyle/>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
        <NewTransactionModal 
            isOpen={isNewTransactionModalOpen}
            onRequestClose={handle}
        />
        <Dashboard/>
      </>
    
  );
}

