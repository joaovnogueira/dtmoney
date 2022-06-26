import { createContext } from 'react'

export const TransactionsContext = createContext([]);
 
export const TransactionsProvider() {
    useEffect (() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
    }, []);
}
