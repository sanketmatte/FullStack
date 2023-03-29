import React from 'react';
import Father from './Parent'
import Car from './Vehicle';

function CallReactJS(filename){
    // function handleCallback(){
    //     // alert("my son age is : " + age);
        // var filename = document.getElementById("name").value;
        
        


    // }
    if (filename==='Father'){
        return(
        <div>
            <Father name = 'Alpha'></Father>
        </div>
        )
    } 
    else if (filename === 'Car'){
        return(
            <Car name='Creta'></Car>

        )
    }
    else{
        return (
        // <div>

        // <h2>No Such File Found</h2>
        // alert (filename);
        <p>Testing</p>
        // {/* </div> */}
        )
        
    }
 

}

export default CallReactJS;