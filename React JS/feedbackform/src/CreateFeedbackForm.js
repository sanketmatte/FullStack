// import UserInputField from "./input";
// import DropdownField from "./dropdown";
// import CheckboxField from "./checkbox";
// import React, { Component } from 'react';
// import './feedback-form.css'

// class FeedbackForm extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             responseid :1,
//             response: [],
//             checkboxField: [],
//             dropdownField: [],
//             userInputField: [],
            
//         };
//     }

//     handleCheckboxChange = (event) => {
//         const { name, value, checked } = event.target;
//         const fieldIndex = this.state.checkboxField.findIndex((field) => field.question === name);
      
//         if (fieldIndex >= 0) {
//           const field = this.state.checkboxField[fieldIndex];
//           let newResponse;
      
//           if (checked) { 
//             newResponse = [...field.response, value];
//           } else { 
//             newResponse = field.response.filter((responseValue) => responseValue !== value);
//           }
      
//           this.setState((prevState) => ({
//             checkboxField: [
//               ...prevState.checkboxField.slice(0, fieldIndex), 
//               {
//                 ...field,
//                 response: newResponse
//               },
//               ...prevState.checkboxField.slice(fieldIndex + 1)
//             ]
//           }));
//         } else { 
//           this.setState((prevState) => ({
//             checkboxField: [
//               ...prevState.checkboxField,
//               {
//                 question: name,
//                 response: [value]
//               }
//             ]
//           }));
//         }
//       }
      

//     handleDropdownChange = (event) => {
//         this.setState({
//             dropdownField: {
//                     'question': event.target.name,
//                     'response':event.target.value
//                 }
//         })
        
//     }

//     handleUserInputChange = (event) => {
//         this.setState({
//             userInputField: {
//                 'question': event.target.name,
//                 'response':event.target.value
//             }
//         });
        
//     }

//     handleSubmit = (event) => {
//         this.setState((prevState) => ({
//             response: [...prevState.response, {
//                 'responseid':this.state.responseid,
//                 'userInputField':this.state.userInputField,
//                 'dropdownField':this.state.dropdownField,
//                 'checkboxField': this.state.checkboxField

//             }]
//         }));
//         this.setState({
//             checkboxField: [],
//             dropdownField: [],
//             userInputField: [],
//             responseid:this.state.responseid+1
//         });
        
        
//     }
    

//     render() {
//         // const { checkboxValue, dropdownValue } = this.state;

//         return (
//             <>
//             <div className="container">
//                 <div className="divform">
//                     <h1>Survey Form</h1>
//                     <UserInputField
//                         label="Enter your Name"
//                         onChange={this.handleUserInputChange}
//                     />
//                     <DropdownField
//                         label="Select the Role: "
//                         options={['Full Stack Engineer', 'Data Engineering', 'DevOps Engineering']}
//                         onChange={this.handleDropdownChange}
//                     />
//                     <CheckboxField
//                         label="Select the Technology/Languages you have used: "
//                         options={['Java', 'Javascript', 'Docker', 'Django' ]}
//                         onChange={this.handleCheckboxChange}
//                     />
//                     <button  onClick={this.handleSubmit}>Submit</button>
//                 </div>
//             </div>
//             <div className="smallcontainer">
//                 <ul>
//                     {this.state.response.map((res) => (
//                         <li className="databox" key={res.responseid}>
//                                 {res.userInputField.question} - {res.userInputField.response}<br></br> 
//                                 {res.dropdownField.question} - {res.dropdownField.response} <br></br>
//                                 {res.checkboxField[0].question} - {res.checkboxField[0].response} <br></br>
//                         </li>
                        
//                     ))}
//                 </ul>
//                 </div>
//             </>
//         );
//     }
// }

// export default FeedbackForm;


import React, { Component } from 'react';
import DropdownField from './DropdownField';
import CheckboxField from './CheckboxField';
import UserInputField from './UserInputField';
class CreateFeedbackForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [], // array to hold all the questions
    };
  }

  // add a new question to the state
  addQuestion = () => {
    const newQuestion = {
      label: '',
      type: '',
      options: [],
    };

    this.setState({
      questions: [...this.state.questions, newQuestion],
    });
  };

  // update the label for a specific question
  updateLabel = (index, event) => {
    const { questions } = this.state;
    questions[index].label = event.target.value;

    this.setState({
      questions: [...questions],
    });
  };

  // update the type for a specific question
  updateType = (index, event) => {
    const { questions } = this.state;
    questions[index].type = event.target.value;

    this.setState({
      questions: [...questions],
    });
  };

  // update the options for a specific question
  updateOptions = (index, event) => {
    const { questions } = this.state;
    const options = event.target.value.split(',');
    questions[index].options = options.map((option) => option.trim());

    this.setState({
      questions: [...questions],
    });
  };

  // render the form
  render() {
    const { questions } = this.state;

    return (
      <div>
        <h1>Create a Dynamic Form</h1>

        {questions.map((question, index) => (
          <div key={index}>
            <label>
              Question {index + 1}:
              <input type="text" value={question.label} onChange={(e) => this.updateLabel(index, e)} />
            </label>

            <label>
              Response Type:
              <select value={question.type} onChange={(e) => this.updateType(index, e)}>
                <option value="">Select a response type</option>
                <option value="dropdown">Dropdown</option>
                <option value="checkbox">Checkbox</option>
                <option value="input">Input</option>
              </select>
            </label>

            {question.type === 'dropdown' && (
              <DropdownField label={question.label} options={question.options} onChange={(e) => this.updateOptions(index, e)} />
            )}

            {question.type === 'checkbox' && (
              <CheckboxField label={question.label} options={question.options} onChange={(e) => this.updateOptions(index, e)} />
            )}

            {question.type === 'input' && <UserInputField label={question.label} onChange={(e) => this.updateOptions(index, e)} />}
          </div>
        ))}

        <button onClick={this.addQuestion}>Add Question</button>
      </div>
    );
  }
}

export default CreateFeedbackForm;