import React, { Component } from 'react';

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

export default CheckboxField;