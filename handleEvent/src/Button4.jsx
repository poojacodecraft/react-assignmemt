

const Button4 = () => {

    let count=0;
    const handleClick = (name)=>{
        
        if(count<3){
            count ++;
            console.log(`${name} clicked me ${count} times`);
        }
        else{
            console.log(`your chance is over`);
        }
    } 

  return (
    <>
    <button onClick={() => handleClick("pooja")}> button 4 </button>
    </>
  )
}

export default Button4