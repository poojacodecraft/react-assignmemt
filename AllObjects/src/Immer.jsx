/*There is no such thing as nested objects. 
All are differant objects
The item/element of an object points to other objects.
If an object A is mutated then if other object b wich points to object A, or  object C which points to object A gets also mutated.
To solve this we can flatten our array or use "Immer" a library.
Immer is used to update nested objects, it deosnt overwrite past state
*/

import {useImmer} from 'use-immer'; //importing Immer library

function Artists(){

    const initialArtist = {name: "Leonardo da Vinci", info:{ birth:"April 15, 1452", knownFor:{i:"Mona Lisa", ii:"The Last Supper "} } }
    
    const [artist, setArtist]= useImmer(initialArtist) //just like useState a default value is assigned to the artist variable

    const handleChange = (e) => setArtist( draft => {
            
            if (e.target.name ==="name") {
                draft.name = e.target.value}

            else if(e.target.name === "birth") {
                draft.info.birth = e.target.value}

            else if(e.target.name === "i") {
                draft.info.knownFor.i = e.target.value
            }
            else {
                draft.info.knownFor.ii = e.target.value}
            
        }         
    ) 


    return(
        <div>
            <label>
                Name: 
                <input name="name" value={artist.name} onChange={handleChange} /> <br/>
            </label>
            <label>
                Birth:
                <input name="birth" value={artist.info.birth} onChange={handleChange} /> <br/>
            </label>
            Known for:<br/>
            <label>
                 1.
                <input name="i" value={artist.info.knownFor.i} onChange={handleChange} /> &nbsp;
            </label>
            <label>
                2.
                <input name="ii" value={artist.info.knownFor.ii} onChange={handleChange}/>
            </label>
            <br/>
            <u> initial Artist details</u> &nbsp;    {/* values aren't changed even after updating state variable using immer */}
               {initialArtist.name} {initialArtist.info.birth}   <br/>
            <u> New artist details who copies the Leonardo da Vinci masterpeices </u> &nbsp;
            {artist.name} {artist.info.birth}
        </div>
    )

    }
export default Artists