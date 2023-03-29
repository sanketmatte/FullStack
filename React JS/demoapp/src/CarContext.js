import React, {createContext, useContext} from "react";

const carContext = createContext();

// Triggered Function & Context Provider
function CarCont (props) {
    const {make, model} = props;
    return <carContext.Provider value = {{make, model}}><CarDisp /></carContext.Provider>
}

// Context Consumer
function CarDisp (){
    const {make, model} = useContext(carContext);

    return(
        <div>
            <h1>Car: {make} and Model: {model}</h1>
        </div>
    )
}

export default CarCont;