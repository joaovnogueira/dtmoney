import { createContext } from 'react'
import { api } from './services/api';

export const TransactionsContext = createContext([]);
 
export function TransactionsProvider() {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect (() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
    }, []);
}
