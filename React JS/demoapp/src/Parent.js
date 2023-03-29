import React from 'react'
import Son from './Child';

function Father(){

    function handleCallback(age){
        alert("my son age is : " + age);
    }

    return (
        <div>
            <Son name="Sanjay" parentCallback = {handleCallback} ></Son>
            <h1> From the father component</h1>
        </div>
    )
}

export default Father;