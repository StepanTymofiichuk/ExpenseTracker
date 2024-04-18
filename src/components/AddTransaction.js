import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


function AddTransaction() {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);
    const [startDate, setStartDate] = useState(new Date());
    const { addTransaction } = useContext(GlobalContext)
    const onSubmit = e => {
      e.preventDefault()
      const newTransaction = {
        id: Math.floor(Math.random() * 1000000),
        text,
        amount: +amount,
        date: startDate.getMonth() + "/" + startDate.getDate() + "/" + startDate.getFullYear(),
      }
      addTransaction(newTransaction)
      setText("")
      setAmount("")
    }
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Expense Title</label>
          <input 
            type="text" 
            required
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)} />
        </div>
        <div className="form-control">
        <label htmlFor=""
            >Expense Date</label>
          <DatePicker 
            placeholder='Select Date...'
            selected={startDate} 
            onChange={(date) => setStartDate(date)} />
          <label htmlFor="amount"
            >Expense Amount <br />
            (negative - expense, positive - income)</label>
          <input 
            type="number" 
            required
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)} />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction
