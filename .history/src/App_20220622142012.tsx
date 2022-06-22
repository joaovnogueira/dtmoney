import { GlobalStyle } from "./assets/styles/global";
import { Dashboard } from "./components/dashboard";
import { Header } from "./components/header";
import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement('#root');

export function App() {
  

  return (
      <>
        <GlobalStyle/>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
        
        
        <Dashboard/>
      </>
    
  );
}

