import taylor from './assets/taylor.jpg'

const Card=()=>
    
    <div className='card'>
        <img className='pro-pic' src={taylor} alt="profile Picture" />
        <h1 className='title'> Talyor Swift</h1>
        <p className='text'> I <span className='red'>&hearts; </span> T.S and I'm not a Swiftie</p>

    </div>
export default Card;