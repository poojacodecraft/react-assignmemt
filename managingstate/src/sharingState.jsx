
// sharing state between components
import { useState } from "react";

export default function IdiomPhrases(){

    const [activeIndex, setActiveIndex] = useState(null)

    const IdiomDetails = [
        {
          title: 'spill the beans',
          meaning: 'to reveal a secret',
          usage: "He spilled the beans when she asked him about the secret."
        },
        {
          title: 'hit the nail on the head',
          meaning: 'to describe exactly what is causing a situation or problem',
          usage: "She really hit the nail on the head with her analysis of the issue."
        },
        {
          title: 'barking up the wrong tree',
          meaning: 'to be pursuing a mistaken or misguided line of thought or course of action',
          usage: "If you think I'm the one who took your book, you're barking up the wrong tree."
        },
        {
          title: 'burn the midnight oil',
          meaning: 'to work late into the night',
          usage: "I had to burn the midnight oil to finish the project on time."
        },
        {
          title: 'break the ice',
          meaning: 'to initiate social interaction, especially in a tense or awkward situation',
          usage: "He told a joke to break the ice at the beginning of the meeting."
        }
      ];
      
      

return(
    <>
    <h2> Idioms and Phrases </h2>
    {IdiomDetails.map((idiom, index) => 
    <Idioms 
        key={index} 
        title={idiom.title}
        meaning={idiom.meaning}
        usage={idiom.usage}
        isActive={activeIndex ===index}
        onShow = {()=> setActiveIndex(index)}/>
    )}
    </>
)
}

function Idioms({title, meaning, usage, isActive, onShow}){

return (
   <section style={{border:"1px solid orange"}}>
    <h3> {title}</h3>
    {isActive ? 
    <> meaning: {meaning} <br/> usage: {usage} </>
    : <button onClick={onShow}> show </button>}
   </section>     
)
}