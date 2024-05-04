// to remove an element we use filter method

import { useState } from "react";

let initialFlower = [
    {id:0, name: "rose"},
    {id:1, name:"lotus"},
    {id:2, name:"sunFlower"}
];

export default function List() {

    const [flowers, setFlowers]= useState(initialFlower);
    const handleDelete =(flower) => setFlowers(flowers.filter( f => f.id !== flower.id))

    return(
        <>
            <h2> List of Flowers</h2>
            <ul>
                {flowers.map((flower) => 
                <li key= {flower.id} > {flower.name} &nbsp;
                   <button onClick={() => {handleDelete(flower)} }>
                  delete
                  </button>
                </li>
                )}
            </ul>
           <hr/> 
        </>
    )
}