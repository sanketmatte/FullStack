import React, { useState } from "react";

function ExpenseTracker(){
    // const [expenseList, setExpense] = useState([]);
    const [expenseName, setExpenseName] = useState('');
    // const [expenseAmount, setExpenseAmount] = useState(0);
    const expenseNames =['other']

    const ExpenseType = (event) => {
        setExpenseName(event.target.value)
    };

    return(
        <div>
            <h1>This is the Expense Tracker Application</h1>
            <label>
                Give the Operator:
                <select id="ExpenseType" value={expenseName} onSelect={ExpenseType}> 
                    {expenseNames.map((name, index)=>(
                        <option key={index} value={name}>{name}</option>    
                    ))}
                    {/* <option key ={expenseNames.length + 1} value="other">Other</option>     */}
                </select>             
            </label>
            
            <label>
                Enter Your Expense: 
                <input id='ExpenseAmount' type='number'></input>
            </label>
        </div>
        // <div></div>
    )

}

export default ExpenseTracker