import { CharacterProps } from "../Props"

const Character = ({emote, character}: CharacterProps)=>{

    return(
        <div className='character'>
            <img className='character-sprite' src={`../src/assets/${character}/${character}-${emote}.png`} alt={`sprite-${character}`} id={`sprite-${character}`}/>
        </div>
    )
}

export default Character;