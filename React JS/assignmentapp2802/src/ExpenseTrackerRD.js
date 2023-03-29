import React from 'react';

class Track extends React.Component {
    state = {
      shopping: 0,
      food :0,
      grocery :0,
      other :0,
      total:0
      
    };

    
    

    result=() =>{
      var n1 = document.getElementById("number1").value;
    //   var n2 = document.getElementById("number2").value;
      var operator=document.getElementById("operator").value;
      
  

    switch(operator) {
      case 's':
        
        this.setState({ 
            shopping: this.state.shopping + parseInt(n1),
            total: this.state.total + parseInt(n1)
        
        })
        
        
        break;
      case 'f':
        this.setState({ 
            food: this.state.food + parseInt(n1),
            total: this.state.total + parseInt(n1)
        
        })
        
        
        
        break;
      case 'g':
        this.setState({ 
            grocery: this.state.grocery + parseInt(n1),
            total: this.state.total + parseInt(n1)
        
        })
        
        
        break;
      case '0':
        this.setState({ 
            other: this.state.other + parseInt(n1),
            total: this.state.total + parseInt(n1)
        
        })
        
        
        
        break;
      default:
        break;
    }
    
    
  }
//   calcTotal=() =>{
//     this.setState({ 
       
//         total: this.state.shopping + this.state.other + this.state.grocery + this.state.food
    
//     })
//   }
  reset=() =>{
    this.setState({ 
        shopping: 0,
      food :0,
      grocery :0,
      other :0,
      total:0
    
    })
  }
  render() {
    const sp = this.state.shopping;
    const ot = this.state.other;
    const gr = this.state.grocery;
    const fd = this.state.food;
    const total= this.state.total;
    // const total= this.state.shopping + this.state.other + this.state.grocery + this.state.food

    return (
        <div>
             <table>
             <tr>
               <th>Category</th>
               <th>Expense</th>
             </tr>
             <tr>
               <td>Shopping</td>
               <td>{sp}</td>
             </tr>
             <tr>
               <td>Food</td>
               <td>{fd}</td>
             </tr>
             <tr>
               <td>Groceries</td>
               <td>{gr}</td>
             </tr>
             <tr>
               <td>Other</td>
               <td>{ot}</td>
             </tr>
            </table> 
            <div> Total Expense: {total}</div>
            <input type="text" id="number1"/>
            {/* <input type="text" id="number2"/> */}
            <select id="operator" >
            <option value="">Category</option>
            <option value="s">Shopping</option>
            <option value="f">Food</option>
            <option value="g">Grocery</option>
            <option value="o">Others</option>
            </select>
            <button type='button' onClick={this.result}>Add</button>
            <button type='button' onClick={this.reset}>Reset</button>
            {/* <input type="text" id="number3" readOnly/> */}
            
        </div>
    )
  }
}

export default Track;