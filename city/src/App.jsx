import Place from "./place"
import propTypes from 'prop-types'


const App = () => 
    <div >
       <Place city="Viazg" state="AP" isCapital= {false} />
       <Place city="Mumbai" state="MH" isCapital={true} />
       <Place city="Chennai" state="TN" isCapital={true} />
       <Place city="Manali" state="HP" isCapital={false} />
       <Place  state="Kerala"/>
    </div> 

export default App

Place.propTypes={
  city: propTypes.string,
  state: propTypes.string,
  isCapital: propTypes.bool
}
Place.defaultProps={
  city:"null",
  state:"null",
  isCapital:false
}