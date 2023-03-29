import React, { useState } from "react";

function Gender(){

    const [genderMode, genderChange] = useState(1);

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

export default Gender;