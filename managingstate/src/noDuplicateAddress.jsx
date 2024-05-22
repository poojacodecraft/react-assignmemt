//state shoud not contain any duplicate values
//structuring state well makes it easy to modufy and debug

import { useState } from "react";

export default function Address(){

    const [state,setState] = useState("andhra pradesh");
    const [ city, setCity] = useState("vizag");
    
    // defining a varaible which can deduce input from state variables
    const fullAddress =  city +", "+ state

    return(
        <>
            <h2>Your address </h2>
            <label> state: &nbsp;
                <input value={state} onChange={e => setState(e.target.value)}/>
            </label>
            <label> city : &nbsp;
                <input value={city} onChange={e => setCity(e.target.value)}/>
            </label>
            <h3> your address is: {fullAddress} </h3> <hr/>
        </>
    )
}