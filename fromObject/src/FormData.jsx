import { useState } from "react";

const FormData = () => {

    const [data, setData] = useState({name:'Guest',
                                      age:18,
                                      email:"guest@mail.com"})
     
    //spread operator is used so that all exsisting properties of objects are copied.
    //  ({}) parenthesies is used outside curly brackets beacuse react thinks we are writing multi line code

    const handleNameChange =  (event) => setData( d => ({...d, name:event.target.value}))
    const handleAgeChange =   (event) => setData( d => ({...d, age:event.target.value}))
    const handleEmailChange = (event) => setData( d => ({...d, email:event.target.value}))

  return (
    <div>
      <p> Your details are: <br/>{data.name} <br/> {data.age} <br/> {data.email} </p>
      <input type="text"   value={data.name} onChange={handleNameChange}/>
      <input type="number" value={data.age} onChange={handleAgeChange}/>
      <input type="email"  value={data.nameemail} onChange={handleEmailChange}/>
    </div>
  )
}

export default FormData