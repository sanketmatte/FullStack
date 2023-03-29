import UserInputField from "./UserInputField";
import DropdownField from "./DropdownField";
import CheckboxField from "./CheckboxField";
import React, { Component } from 'react';
import './FeedbackForm.css'

class FeedbackForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            responseid :1,
            response: [],
            checkboxField: [],
            dropdownField: [],
            userInputField: [],
            
        };
    }

    handleCheckboxChange = (event) => {
        const { name, value, checked } = event.target;
        const fieldIndex = this.state.checkboxField.findIndex((field) => field.question === name);
        console.log(this.state.checkboxField)
        console.log(fieldIndex)
        if (fieldIndex >= 0) {
          const field = this.state.checkboxField[fieldIndex];
          let newResponse;
      
          if (checked) { 
            newResponse = [...field.response, value];
          } else { 
            newResponse = field.response.filter((responseValue) => responseValue !== value);
          }
      
          this.setState((prevState) => ({
            checkboxField: [
              ...prevState.checkboxField.slice(0, fieldIndex), 
              {
                ...field,
                response: newResponse
              },
              ...prevState.checkboxField.slice(fieldIndex + 1)
            ]
          }));
        } else { 
          this.setState((prevState) => ({
            checkboxField: [
              ...prevState.checkboxField,
              {
                question: name,
                response: [value]
              }
            ]
          }));
        }
      }
      

    handleDropdownChange = (event) => {
        this.setState({
            dropdownField: {
                    'question': event.target.name,
                    'response':event.target.value
                }
        })
        
    }

    handleUserInputChange = (event) => {
        this.setState({
            userInputField: {
                'question': event.target.name,
                'response':event.target.value
            }
        });
        
    }

    handleSubmit = (event) => {
        this.setState((prevState) => ({
            response: [...prevState.response, {
                'responseid':this.state.responseid,
                'userInputField':this.state.userInputField,
                'dropdownField':this.state.dropdownField,
                'checkboxField': this.state.checkboxField

            }]
        }));
        this.setState({
            checkboxField: [],
            dropdownField: [],
            userInputField: [],
            responseid:this.state.responseid+1
        });
        
        
    }
    

    render() {
        // const { checkboxValue, dropdownValue } = this.state;

        return (
            <>
            <div className="container">
                <div className="createform">HI</div>
                <div className="divform">
                    <h1>Survey Form</h1>
                    <UserInputField
                        label="Enter your Name"
                        onChange={this.handleUserInputChange}
                    />
                    <DropdownField
                        label="Select the Role: "
                        options={['Full Stack Engineer', 'Data Engineering', 'DevOps Engineering']}
                        onChange={this.handleDropdownChange}
                    />
                    <CheckboxField
                        label="Select the Technology/Languages you have used: "
                        options={['Java', 'Javascript', 'Docker', 'Django' ]}
                        onChange={this.handleCheckboxChange}
                    />
                    <button  onClick={this.handleSubmit}>Submit</button>
                </div>
                
            </div>
            <div className="smallcontainer">
                <ul>
                    {this.state.response.map((res) => (
                        <li className="databox" key={res.responseid}>
                                {res.userInputField.question} - {res.userInputField.response}<br></br> 
                                {res.dropdownField.question} - {res.dropdownField.response} <br></br>
                                {res.checkboxField[0].question} - {res.checkboxField[0].response} <br></br>
                        </li>
                        
                    ))}
                </ul>
                </div>
            </>
        );
    }
}

export default FeedbackForm;




