// onchange is primarily used with frm elements as <input>, <textarea>, <select>, <radio>
// it triggers a function everytime the value of input changes.

import { useState } from "react";

const MyComponent = () => {

    //using useState to initialize different state variables
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    // function to update state variable
    const handelNameChange = (event) => setName(event.target.value);
    const handeQuantityChange = (event) => setQuantity(event.target.value);
    const handleCommentChange = (event) => setComment(event.target.value);
    const handlePaymentChange = (event) => setPayment(event.target.value);
    const handleShippingChange = (event) => setShipping(event.target.value);

    return(
        <div>
            <input value={name} onChange={handelNameChange}/>
            <p> Name : {name} </p>

            <input value={quantity} onChange={handeQuantityChange} />
            <p> Quantity : {quantity} </p>

            <textarea value={comment} onChange={handleCommentChange} 
            placeholder = "Enter deleivery Instructions"/>
            <p> Comment : {comment} </p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value=""> Select an option </option>
                <option value="UPI"> UPI </option>
                <option value="Online banking"> Online banking </option>
                <option value="wallet"> Wallet </option>
            </select>
            <p> Payment : {payment} </p>

            <label>
                <input type= "radio" value = "pick up"
                    checked= {shipping ==="pick up"}
                    onChange={handleShippingChange}/>
                Pick up    
                </label>  

            <label> 
                <input type ="radio" value ="deleivery"
                checked={shipping==="deleivery"}
                onChange={handleShippingChange}/>
                Deleivery
                </label>      
        </div>
    )

}

export default MyComponent


