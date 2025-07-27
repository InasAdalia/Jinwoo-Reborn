import styles from './Button.module.css';
import soundManager from '../SoundManager';
import { useCustomContext, TogglePopupContext } from '../Data/Context'
import clsx from 'clsx';
import { useState } from 'react';

interface ButtonProps{
    clickable: boolean // if false, the button will not be clickable
    btnText?: string
    toggles?: 'info'|'inventory'|'summons' | 'sideQuest' // if provided, the button will toggle the popup on/off
    toggledMode?: boolean // if true, the button will be toggled on/off
    template? : 'button-1' | 'button-2' | 'info-button' | 'arrow' | null
    onClick?: (() => void) | ((e: React.MouseEvent<HTMLButtonElement>) => void);
    wrapperClass?: string;
}

const Button = ({btnText, toggles, template, onClick, wrapperClass, clickable}: ButtonProps) => {

    const {whichPopup, setPopup} = useCustomContext(TogglePopupContext);
    const [isActive, setIsActive] = useState(false);
    const isToggled = toggles? whichPopup === toggles: false;
    
    return(
        <button
        onMouseEnter={()=>{clickable && setIsActive(true); soundManager.playSound('select1')}}
        onMouseLeave={()=>{setIsActive(false)}}
        onClick={(e)=>{
            soundManager.playSound('select3');
            toggles != null && (isToggled ? setPopup(null) : setPopup(toggles ?? null));
            onClick?.(e);
        }}
        className={clsx(styles.button, styles[template ?? ''],
            template && styles.hasTemplate, 
            !clickable && styles.disabled,
            (isActive || isToggled) && styles.active,
            wrapperClass)}
        style={{backgroundImage: 
            `${template ? `url(/components/buttons/${template}${
                (toggles) 
                ? (isActive || isToggled && clickable) 
                    ? '-active.png' 
                    : '-inactive.png' 
                : '-inactive.png'})` 
            : 'none'}`}}
        >
            {btnText && <div className='center'> {btnText}</div>}
        </button>
    )
}

export default Button;