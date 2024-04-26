
const List =(props)=>{

    const {item ,title} = props
    
    const loop= item.map((curItem)=> <li key={curItem.id}>{curItem.name} &nbsp; {curItem.calories}
                                   {/* {curItem.calories !== undefined ? curItem.calories : "" } */}
                                     </li>)
                                
    return(
    <>
        <h2>{title}</h2>
        <ul>{loop}</ul>
    </>
    )  
}
List.defaultProps = {
    title : "List",
    item : [],
}

export default List