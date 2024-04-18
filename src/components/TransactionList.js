import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction'

function TransactionList() {
  const { transactions } = useContext(GlobalContext)
  console.log(transactions)
  const NoTransactions = () => {
    return(
      <div style={{textAlign: "center"}}>
        No Transactions...
      </div>
    )
  }
  return (
    <div>
      <h3>History</h3>
      <div>
      <ul className="list">
        {
          transactions.length > 0 ? transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />
          )) : <NoTransactions /> }
      </ul>      
      </div>
    </div>
  )
}

export default TransactionList
