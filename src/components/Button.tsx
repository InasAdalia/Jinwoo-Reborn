import '../stylesheets/index.css'
import {ButtonProps} from '../Props.tsx'
import soundManager from '../SoundManager'
import { TogglePopupContext, useCustomContext } from '../Context.tsx';

const Button = ({btnText, toggles, template, onClick}: ButtonProps) => {

    const {whichPopup, setPopup} = useCustomContext(TogglePopupContext);
    const isOpen = toggles? whichPopup === toggles: false;
    return(
        <button id="my-button"
        onMouseEnter={()=>{soundManager.playSound('select1')}}
        onClick={()=>{
            soundManager.playSound('select3');
            toggles!==null && (isOpen? setPopup(null): setPopup(toggles));
            onClick();
        }}
        className={`${template===null ?'button-no-template': isOpen?`${template} ${template}-active`:`${template} ${template}-inactive`}`}>
            <div className='center'> {btnText}</div>
        </button>
    )
}

export default Button;