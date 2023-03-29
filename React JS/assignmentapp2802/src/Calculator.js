import React from "react";

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            number1:0,
            number2:0,
            operator:'+',
            result:0
        }
    }
    number1 = () =>{
        var number1 = parseInt(document.getElementById("number1").value)
        this.setState({
            number1:number1
        });
    }
    number2 = () =>{
        var number2 = parseInt(document.getElementById("number2").value)
        this.setState({
            number2:number2
        });
    }
    operator = () =>{
        var operator = document.getElementById("operator").value
        this.setState({
            operator:operator
        });
    }
    calculate = () => {
        let result;
        switch (this.state.operator){
            case '+':
                result = this.state.number1 + this.state.number2;
                break;
            case '-':
                result = this.state.number1 - this.state.number2;
                break;
            case '*':
                result = this.state.number1 * this.state.number2;
                break;
            case '/':
                result = this.state.number1 / this.state.number2;
                break; 
            default:
                result = 0;   
        }
        this.setState({
            result : result
        });
        
    };

    render(){
        return(
            <div>
            <h1>This is a Calculator Application</h1>
            <label>
                Give the First Number:
                <input type="number" id = "number1" onChange={this.number1}></input>             
            </label>
            <br></br>
            <br></br>
            <label>
                Give the Operator:
                <select id="operator" onChange={this.operator}>
                    <option value="+">+</option> 
                    <option value="-">-</option>    
                    <option value="*">*</option>    
                    <option value="/">/</option>    
                </select>             
            </label>
            <br></br>
            <br></br>
            <label>
                Give the Second Number:
                <input type="number" id = "number2" onChange={this.number2}></input>             
            </label>
            <br></br>
            <br></br>
            <button onClick={this.calculate}>Calculate</button>
            <br></br>
            <br></br>
            <label>
                Result
                <input  value={this.state.result} readOnly></input>             
            </label>
        </div>
        )
        
    }
}

export default Calculator;