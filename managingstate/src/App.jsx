import Address from "./noDuplicateAddress"
import Form from "./InputStateComponent"
import IdiomPhrases from "./sharingState"
import { useState } from "react"

export default function App(){

    const [ActiveComponent, setActiveComponent] = useState(null)
    
    const components = [<Address/>, <Form/>, <IdiomPhrases/>]
    
return(
<> 
<h1> My components</h1>

{components.map((component,i)=>( 
    <div key={i}> 
        <button  onClick={() =>setActiveComponent(component)}>show {i} </button>  
       { console.log(ActiveComponent)}
      
     
    </div>   
)
)} {ActiveComponent}
</>
) 
}

//  function Active(){

//     const [activeComponent, setActiveComponent] = useState(null)
    
//     const components = [Address, Form, IdiomPhrases]
//     return(
//         components.map((component, i)=> (
//             <>
//             key={i}
//             <button onClick={setActiveComponent(component)} > show {component}</button>
//             </>
//         )
//     ))
    
// }

//const active = (activeComponent) => <activeComponent/> 