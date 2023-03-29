import React, { Component } from 'react';

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

export default DropdownField;