//update multiple fields of an object with one common function handleChange function
import { useState } from "react";

 export default function EmployeeDetails(){

    const [employee, setEmployee] = useState({
                                               name:"Abby",
                                               empId:1,
                                               dept:"Sales"
                                            })

    const handleChange = (e) =>
        setEmployee({ ... employee, [e.target.name] : e.target.value})
    

    return(
        <div>
        <label>
            Name:
            <input name="name" value={employee.name} onChange={handleChange}/>
        </label>

        <label>
            Employee Id:
            <input name="empId" value={employee.empId} onChange={handleChange} />
        </label>

        <label>
            Department:
            <input name="dept" value={employee.dept} onChange={handleChange} />
        </label>

        <p>
            {employee.name}{' '}
            {employee.empId} {'' }
            {employee.dept} {' '} 
        </p><hr/>
        </div>
    )

}