

const Place = (props) =>{
    
  const Yes = <span className="yes"> Yes</span>;
  const No = <span className="no"> No</span>;
  return(
    <div className="Place">
        <p> City:{props.city} </p>
        <p>State:{props.state}</p>
        <p> is Capital:{props.isCapital ? Yes:No} </p>
    </div>
  ) 
}

export default Place