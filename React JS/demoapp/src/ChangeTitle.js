import React, { useState, useEffect } from "react";

function ChangeTitle(){

    const [genderMode, genderChange] = useState(1);
    useEffect(
        () =>{
            if (genderMode === 1){
                document.title = 'You are Male' 
            }
            else if (genderMode === 2){
                document.title = 'You are Female' 
            }
        }
    )

    return (
        <div>
            <button type="button" onClick={() => genderChange(1)}>Male</button>
            <button type="button" onClick={() => genderChange(2)}>Female</button>
            { genderMode === 1 &&
                <h1>Male</h1>
            }
            { genderMode === 2 &&
                <h1>Female</h1>
            }

        </div>
    )
}

export default ChangeTitle;