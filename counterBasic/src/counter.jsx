//onclick event handler
// useState is a react hook that allows to create a state variable and a setter function to update it's value in virtual DOM.

import React,{useState} from 'react'

const Counter = () => {

const [count, setCount ]= useState(0);  //declaring state variable "count" and initializing it to 0 using "useState" hook
                                        // setCount is function that will aid in updating "count" value 

const increment = () => setCount( count+1 );  //function to increment count by 1

const decrement = () => setCount( count-1 );  // function to decrement count by 1

const reset = () => setCount(0);              // function to reset value to 0.

return(
    <div>
        <p> counter using onclick <br/> {count} </p>
        <button onClick={increment} > Increment </button>   {/* button to trigger increment, reset and decrement*/}
        <button onClick={reset} > Reset </button>                                 
        <button onClick={decrement} > decrement </button>  
    </div>
)
}

export default Counter