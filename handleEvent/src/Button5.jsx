

const Button5 = () => {

    const handleClick = (e) =>  {
         e.target.textContent =" bye";
         console.log("im the last button")
    }

  return (
    <>
        <button onClick={handleClick} > button 5 </button>
    </>
  )
}

export default Button5


