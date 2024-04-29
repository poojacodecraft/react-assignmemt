/* updater function takes previous state calculate next state
   react puts updater function in a queue
   during next render it calls them in the same order */

import { useState } from "react"

const UpdaterCounter = () => {

  const [Count,setCount]=useState(0);

  const increment =() => {setCount(c => c+1);  // c or prevCount naming convention for previous state
                          setCount(c => c+1);  // using arrow function so the value gets updated every single time setCount is executed
                          setCount(c => c+1);
                          setCount(c => c+1);} 

  const reset = () => setCount(0)
  
  const decrement = () => { setCount(c => c-1);
                            setCount(c => c-1);
                            setCount(c => c-1);
                            setCount(c => c-1);}

  return (
    <div>
      <p> Count: {Count}</p>
      <button onClick={decrement}> Decrement </button> {/*  button to call increment, reset and decrement respectively  */}
      <button onClick={reset}> Reset</button>
      <button onClick={increment}> Increment </button>
    </div>
  )
}

export default UpdaterCounter