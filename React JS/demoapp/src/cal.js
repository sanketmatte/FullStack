import React from 'react';

function ReactCalc(){
    const add = () => {
        var n1 = document.getElementById("number1").value;
        var n2 = document.getElementById("number2").value;
        var n3 = parseInt(n1) + parseInt(n2);
        document.getElementById("addition").value = n3;

    }

    return(
        <div>
            <input type='text' id='number1'/>
            <input type='text' id='number2'/>
            <button type='button' onClick={add}>Add</button>
            <input type='text' id='addition' readOnly/>

        </div>
    )
}

export default ReactCalc
