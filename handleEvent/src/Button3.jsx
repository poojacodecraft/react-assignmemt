

const Button3 = () => {

    const handleClick = (name) => console.log(`${name} stop clicking me`)
  return (
    <button onClick={() => handleClick("Katy")}> button3 </button>
  )
}

export default Button3