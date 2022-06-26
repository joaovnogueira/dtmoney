import { createContext } from 'react'

export const TransactionsContext = createContext([]);
 
export const TransactionsProvider() {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect (() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
    }, []);
}
