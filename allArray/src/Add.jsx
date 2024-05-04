import { useState } from "react";

let nextId=0;

export default function Add(){
    const [name,setName] = useState('')
    const [people, setPeople] = useState([])

    const handleAddPeople = () =>
        setPeople([...people, {id: nextId++, name:name} ])
    

    return(
        <>
        <h2> Inspiring Minds:</h2>
        <input value={name} onChange={e=> setName(e.target.value)}></input>
        <button onClick={handleAddPeople}> 
         add 
         </button>
        <ul>
            {people.map((person)=> 
            <li key={person.id}> {person.name}</li>)}
        </ul>
        <hr/>
        </>
    )
    }    
