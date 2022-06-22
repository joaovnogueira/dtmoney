import { GlobalStyle } from "./assets/styles/global";
import { Dashboard } from "./components/dashboard";
import { Header } from "./components/header";
import Modal from "react-modal";

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

