import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from './services/api';

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

interface TransactionsProviderProps {
    children: ReactNode; // ReactNode: aceita qualquer coisa do React
}

type Transaction


export const TransactionsContext = createContext<Transaction[]>([]);
 
export function TransactionsProvider({children}: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect (() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
    }, []);

    function createTransaction(transaction: Transaction){
            api.post('/transactions', transaction)
    
    }

    return(
        <TransactionsContext.Provider value={transactions}>
            {children}
        </TransactionsContext.Provider>
    );
}
