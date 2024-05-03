//update a nested object 
import { useState } from "react";

export default function ImperialConostructions(){

    //a state variable and state variable to update values
    const[monument, setMonument]= useState({
        name:" Shah Jahan",
        heritage:{
            title: "Taj Mahal",
            year: "1631-1648",
            city: "Agra",
            image:"https://i0.wp.com/thepointsguy.com/wp-content/uploads/2019/06/GettyImages-936994634.jpg?fit=2097%2C1430px&ssl=1"
        }
    })    
    
    //ternary operator to determine which state to update
    const handleChange = (e) => setMonument( e.target.name === "name" ? 
                                            {...monument, [e.target.name] : e.target.value } : //update name property
                                            {...monument,heritage:   //update nested property in heritage
                                            {...monument.heritage,[e.target.name]: e.target.value}} ) 
                                                        

    return(
        <>
            <label>
                Name:
                <input name="name" value={monument.name} onChange={handleChange} /> {' '}
            </label>
            <label>
                Title:
                <input name="title" value={monument.heritage.title} onChange={handleChange} /> {' '}
            </label>
            <label>
                Year:
                <input name="year" value={monument.heritage.year} onChange={handleChange} /> &nbsp;
            </label>
            <label>
                City:
                <input name="city" value={monument.heritage.city} onChange={handleChange} />
            </label>
            <label>
                Image link:
                <input name="image" value={monument.heritage.image} onChange={handleChange} />
            </label>
            <p>
                <i>{monument.heritage.title}</i>  {'by'} {monument.name} <br/>
                located in {monument.heritage.city} <br/>
                built in year: {monument.heritage.year} <br/>
            </p>
            <img src={monument.heritage.image} style={{height:"150px", width:"200px"}} alt={monument.heritage.title}/>
            <hr/>
        </>    
        )
}