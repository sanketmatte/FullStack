import { Component, useState } from "react";

// function Tracker{

//     const [expnse, setExpense]= useState(0)

//     const Categories = ['food','Travel', 

//     ]
// }
class Tracker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expenses: {
                Tansport: 0,
                Food: 0,
                HealthCare: 0,
                Shopping: 0,
                other: 0,
            },
            total: 0,
            expenseName: '',
            amount: 0

        };


    }
    selectType = e => { this.setState({ expenseName:String(e.target.value) }) }

    expenseAmount = e => { this.setState({ amount: parseInt(e.target.value) }) }

    submitData = e => {
        const { expenses, expenseName, amount, total } = this.state;
        if(expenseName.length>0){
        this.setState({
            
            expenses: {
                ...expenses, [expenseName]: expenses[expenseName] ? expenses[expenseName] + amount : amount,
            },
            total: total + amount,
        })
    };

    };


    render() {
        const { expenses, expenseName, amount } = this.state
        return (
            <div>
                <h2>Expense Tracker</h2>
                <form >
                    <select type='text' onChange={this.selectType}>
                        <option value=''>Select value</option>
                        <option value="Tansport">Tansport</option>
                        <option value="Food">Food</option>
                        <option value="HealthCare">HealthCare</option>
                        <option value="Shopping">Shopping</option>
                        <option value="other">other</option>
                    </select>
                    <input type='number' value={amount} onChange={this.expenseAmount}></input>
                    <button type='button' onClick={this.submitData} >Submit</button>
                </form>

                <table>
                    <thead>
                        <tr>
                            <th> Expense type</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(expenses).map(([name, amount]) => (
                            <tr>
                                <td>{name}</td>
                                <td>{amount}</td>
                            </tr>

                        ))}
                        <tr>
                            <td><b>Total</b></td>
                            <td>{this.state.total}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Tracker