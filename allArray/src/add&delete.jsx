// add and delete values

import { useState } from "react";

function AddDelete(){

    const initialName = () =>["raj","simran", "kiran","nidhi"]

    //declaring state variables
    const [nameList, setNameList] = useState(initialName)
    const [name, setName] = useState('')

    //callback function to delete the values/names
    const handleDelete = (index) => 
        setNameList(nameList.filter((_, i) => index !== i) )

    //callback function to delete the values/names
    const handleAddName = () => setNameList([...nameList,name])

    return(
        <>
            <h2> Add and delete Names</h2>
            
            {/*  take input(name) from user*/}
            <input value={name} onChange={e =>setName(e.target.value)}/>
            <button onClick={handleAddName}> add </button>
            
            {/*  display the names inside the name list*/}
            <ul>
                {nameList.map((n,index) => <li key={index} > {n} &nbsp;
                    <button onClick={() => handleDelete(index)}>
                        delete </button> </li>)}
            </ul>

        </> 
    ) 

}

export default AddDelete