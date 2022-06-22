import { GlobalStyle } from "./assets/styles/global";
import { Dashboard } from "./components/dashboard";
import { Header } from "./components/header";
import Modal from "react-modal";

export function App() {

  
  return (
      <>
        <GlobalStyle/>
        <Header/>
        
        <Modal 
            isOpen={isNewTransactionModalOpen} 
            onRequestClose={handleCloseNewTransactionModal}
        >
            <h2>Cadastrar transação</h2>
        </Modal>
        <Dashboard/>
      </>
    
  );
}

