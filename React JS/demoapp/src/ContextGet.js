import React, { useContext } from "react";

const MyContext = React.createContext("Cool Down!");

function GetContext () {
    const val = useContext(MyContext);

    return(
        <div>
            <b>{ val }</b>
        </div>
    )
}

export default GetContext;