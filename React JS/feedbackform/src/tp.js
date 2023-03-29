import React, { Component } from 'react';

// Child component for the user input field
class UserInputField extends Component {
    render() {
      const {  label, onChange } = this.props;
      return (
        <div>
          <label>{label}:</label>
          <input name={label} type="text" onChange={onChange} />
        </div>
      );
    }
  }



// Child component for the checkbox field
class CheckboxField extends Component {
    render() {
      const { label, options, onChange } = this.props;
  
      return (
        <div>
          <label>{label}:</label>
          {options.map((option) => (
            <label key={option}>
              <input type="checkbox" name = {label} value={option} onChange={onChange} />
              {option}
            </label>
          ))}
        </div>
      );
    }
}



// Child component for the dropdown field
class DropdownField extends Component {
    render() {
        const { label, options, onChange } = this.props;

        return (
            <div>
                <label>{label}:</label>
                <select name={label} onChange={onChange}>
                    <option value="">Select an option</option>
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        );
    }
}

// import UserInputField from "./UserInputField";
// import DropdownField from "./DropdownField";
// import CheckboxField from "./CheckboxField";
// import React, { Component } from 'react';
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
      
        if (fieldIndex >= 0) { // If a field with the same question already exists
          const field = this.state.checkboxField[fieldIndex];
          let newResponse;
      
          if (checked) { // If the checkbox is checked, add the new value to the response array
            newResponse = [...field.response, value];
          } else { // If the checkbox is unchecked, remove the value from the response array
            newResponse = field.response.filter((responseValue) => responseValue !== value);
          }
      
          this.setState((prevState) => ({
            checkboxField: [
              ...prevState.checkboxField.slice(0, fieldIndex), // Replace the existing field object with the updated one
              {
                ...field,
                response: newResponse
              },
              ...prevState.checkboxField.slice(fieldIndex + 1)
            ]
          }));
        } else { // If a field with the same question doesn't exist, create a new one
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
            <div className="container">
                <div className="divform">
                    <h2>Feedback Form</h2>
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
                <div className="container"></div>
                <ul>
                    {this.state.response.map((res) => (
                        <li key={res.responseid}>
                                {res.userInputField.question} - {res.userInputField.response} 
                                {res.dropdownField.question} - {res.dropdownField.response} 
                                {res.checkboxField[0].question} - {res.checkboxField[0].response} 
                        </li>
                        
                    ))}
                </ul>


            </div>
        );
    }
}

export default FeedbackForm;




