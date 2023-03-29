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

export default UserInputField