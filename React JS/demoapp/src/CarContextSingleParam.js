import React, {createContext, useContext} from "react";

const carContext = createContext();

// Triggered Function & Context Provider
function CarCont (props) {
	const make = props
    return <carContext.Provider value = {make}><CarDisp /></carContext.Provider>
}

// Context Consumer
function CarDisp (){
    const {make} = useContext(carContext);
    return(
        <div>
            <h1>Car: {make}</h1>
        </div>
    )
}

export default CarCont;