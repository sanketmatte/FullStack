import React from 'react';  

class UnControlled extends React.Component {  
  constructor(props) {  
      super(props);  
      this.updateSubmit = this.updateSubmit.bind(this);  
      this.name = React.createRef();
      this.comp = React.createRef();
  }  
  updateSubmit(event) {  
      alert('You have entered the UserName ' + this.name.current.value + ' and CompanyName ' + this.comp.current.value + ' successfully.');  
      event.preventDefault();  
  }  
  render() {  
    return (  
      <form onSubmit={this.updateSubmit}>  
        <h1>Uncontrolled Form Example</h1>  
        <label>Name:  
            <input type="text" ref={this.name} />  
        </label>  
        <label>  
            CompanyName:  
            <input type="text" ref={this.comp} />  
        </label>  
        <input type="submit" value="Submit" />  
      </form>  
    );  
  }  
}  
export default UnControlled;