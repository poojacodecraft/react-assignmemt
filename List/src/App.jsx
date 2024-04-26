import List from "./list"

function App() {
  
  const fruits = [{id:1,name:"apple", calories:95 },
                    {id:2,name:"mango", calories:125  },
                    {id:3, name:"banana", calories:105},
                    {id:4, name:"kiwi", calories :70},
                    {id:5, name:"grape", calories:60}];

  const vegetables = [{id:1, name:"potato"},
                     {id:2, name:"cabbage"},
                     {id:3,name:"beetroort"},
                     {id:4,name:"cauliflower"},
                     {id:5,name:"bottleguard"}]

  return (
    <>
    {fruits.length >0 &&  <List item={fruits} />}   {/*  to render list only if array has elements */}
    {vegetables.length>0 && <List item={vegetables} title="vegetables"/> } 
     </>
  )
}

export default App
