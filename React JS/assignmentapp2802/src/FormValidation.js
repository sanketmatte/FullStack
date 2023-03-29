import React, { useState, useEffect } from "react";

function FormValidation() {
    const [name, setName] = useState("");
    const [pass1, setpass] = useState("");
    const [pass2, setconfirmpass] = useState("");

    const [message, setMessage] = useState("");
    const [message2, setMessage2] = useState("");

  
    useEffect(() => {
      if (((name).length<5) ) {
          setMessage(`User Name should be more than 5 Charecter`);
      }
      else if ((name).length>=10 ) {
          setMessage(`Welcome! ${name}`);
      }

      if (pass1 === pass2 ){
        setMessage2(`Password Matched!!`); 
      }
      else{
        setMessage2(`Password Dont Matched!!`);
      }
    }, [name,pass1,pass2]);
  
    function handleNameChange(event) {
        setName(event.target.value);

    }
    function handlePassChange(event) {
        setpass(event.target.value);
          
    }
    function handleConfirmPassChange(event) {
        setconfirmpass(event.target.value);
        
    }
  
    return (
      <div>
        Enter your user name:
        <input  type="text" value={name} onChange={handleNameChange} />
        <p>{message}</p>
        Enter your Password:
        <input  type="password" value={pass1} onChange={handlePassChange} />
        confirm your Password:
        <input  type="text" value={pass2} onChange={handleConfirmPassChange} />
        <p>{message2}</p>
      </div>
    );
  }
  
  export default FormValidation;
  