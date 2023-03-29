import React, { useState } from "react";

function CountClick(){

    const [clickcount, count] = useState(0);

    return (
        <div>
            <p>You clicked {clickcount} times</p>
            <button type="button" onClick={() => count(clickcount+1)}>Increase Count</button>
            

        </div>
    )
}

export default CountClick;