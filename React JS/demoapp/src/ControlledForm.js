import React from 'react';  

class Controlled extends React.Component {  
  constructor(props) {  
      super(props);  
      this.state = {
        namec: '',
        compc: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleChange1 = this.handleChange1.bind(this);
      this.updateCSubmit = this.updateCSubmit.bind(this);
  }  

  handleChange(event) {
    this.setState({
        namec: event.target.value
    });
  }

  handleChange1(event) {
    this.setState({
        compc: event.target.value
    });
  }

  updateCSubmit(event) {  
      alert('You have entered the UserName ' + this.state.namec + ' and CompanyName ' + this.state.compc + ' successfully.');  
      event.preventDefault();  
  }  
  render() {  
    return (  
      <form onSubmit={this.updateCSubmit}>  
        <h1>Controlled Form Example</h1>  
        <label>Name:  
            <input type="text" value={this.state.namec} onChange={this.handleChange} />  
        </label>  
        <label>  
            CompanyName:  
            <input type="text" value={this.state.compc} onChange={this.handleChange1} />  
        </label>  
        <input type="submit" value="Submit" />  
      </form>  
    );  
  }  
}  
export default Controlled;  
