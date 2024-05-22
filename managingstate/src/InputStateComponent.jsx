import { useState } from "react"

export default function Form() {

    // state variables for input value, currrent status , eroor if any
    const[answer,setAnswer] = useState('')
    const [error,setError] = useState(null) 
    const [status, setStatus] = useState("typing")
 
    // if the answer is correct then the react will render only this specific meassage but not nay from
    if (status=="success"){
        return<h2> That's right!</h2>
     }

    // async for parallel execution , await so that all other execution stops and only submitForm runs 
    // and based on the success and reject  execute the next statement or the error is handled via catch block
    async function handleSubmit(e){
        e.preventDefault()
        setStatus("submitting")
        try{
            await submitForm(answer) // if no error execute the next statement
            setStatus("success") 
        } catch(err){  // if error occors execute this block
            setStatus("typing")
            setError(err)
        }
    } 

return(
    <>
    <h2 style={{colour:"orange"}}> capital quiz</h2>
    <p> 
        capital of Tamil nadu?
    </p>
    <form onSubmit={handleSubmit}>
 
        <textarea value={answer} onChange={e=> setAnswer(e.target.value)} 
        // textarea( or input) is disabled when form is already in the process of submitting
        disabled={status==="submitting"} placeholder="Enter your answer"/>
        <br/>

        {/*  button is disabled when there is no input value or while the form is being submitted*/}
        <button disabled={ answer.length===0 || status==="submitting"}>
            submit
        </button>

         {/* if error occurs then display this message along with the entire form */}
         {error!== null && <p> {error.message}</p>} 
    </form>
    </>
 )
}

function submitForm(answer){
    return new Promise((resolve, reject) =>{
        setTimeout( () => {
            let errorOccurs = answer.toLowerCase()==="chennai"
            errorOccurs ? 
            resolve():reject(new Error("good luck next time")) 
            } ,1200)}
        )}