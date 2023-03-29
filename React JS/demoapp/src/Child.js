import React from 'react'

function Son(props){

    function trigger(event){
        // alert("trigger function");
        var age = document.getElementById("age").value;
        props.parentCallback(age);
        //alert("age : " + age);
    }

    return (
        <div>
            <h1> From the son : {props.name} component</h1>
            <input type="number" id="age" placeholder="Enter my age"/>
            <button onClick={trigger} type="button">Send To Parent</button>
        </div>
    )
}

export default Son;