//update an object with specific callBack functoins
import { useState } from "react";

export default function Studentform(){
    
// setting default value of student state variable via usestate
    const [ student, setStudent] = useState({
        firstName: "Raj",
        LastName: "Kumar",
        email: "raj@gmail.com",
        rollNo : 8
    })

// using spread ... so that all the items of student is copied 
    const handleFirstNameChange = (e) => setStudent({...student, firstName: e.target.value})
    const handleLastNameChange = (e) => setStudent({...student, LastName: e.target.value})
    const handleEmailChange = (e) => setStudent({...student, email: e.target.value})
    const handleRollNoChange = (e) => setStudent({...student, rollNo: e.target.value})

    return(
        <div>
        <label> 
            first Name:
            <input 
                value={student.firstName}
                onChange={handleFirstNameChange}
             />  <br/> 
        </label>

        <label>
            Last Name:
            <input
                value={student.LastName}
                onChange={handleLastNameChange}
             /> <br/> 
        </label>

        <label>
            email:
            <input 
                value={student.email}
                onChange={handleEmailChange}
             /> <br/>
        </label>

        <label>
            Roll No:
            <input
                value={student.rollNo}
                onChange={handleRollNoChange}
             />
        </label> 
        <p> 
            {student.firstName} {' '}
            {student.LastName} {' '}
            {student.rollNo} {' '}
            {student.email} {' '}
        </p>
        <hr/>
        </div>
    )
}