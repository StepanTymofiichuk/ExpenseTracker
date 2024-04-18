import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

function Balance() {
  const { transactions } = useContext(GlobalContext)
  const amounts = transactions.map(transaction => transaction.amount)
  //console.log(amounts)
  const total = amounts.length > 0 ? amounts.reduce((acc, item) => (acc += item)).toFixed(2) : amounts.length
  return (
    <div>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </div>
  )
}

export default Balance
