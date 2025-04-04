import '../stylesheets/index.css'
import {ButtonProps} from '../Props.tsx'
import soundManager from '../SoundManager'
import { TogglePopupContext, useCustomContext } from '../Context.tsx';

const Button = ({btnText, toggles, template}: ButtonProps) => {

    const {whichPopup, setPopup} = useCustomContext(TogglePopupContext);
    const isOpen = whichPopup === toggles;
    return(
        <button id="my-button"
        onMouseEnter={()=>{soundManager.playSound('select1')}}
        onClick={()=>{
            soundManager.playSound('select3');
            console.log(`before: whichPopup ${whichPopup}, toggles ${toggles}`);
            toggles!==null && (isOpen? (setPopup(null), console.log('popup set to null')): (setPopup(toggles)), console.log('popup set to managed'));
            console.log(`after: isOpen ${isOpen} whichPopup ${whichPopup}, toggles ${toggles}`);
        }}
        className={`${template===null ?'button-no-template': isOpen?`${template}-active`:`${template}-inactive`}`}>
            <div className='center'> {btnText}</div>
        </button>
    )
}

export default Button;