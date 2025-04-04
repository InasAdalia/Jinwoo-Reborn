import { useState } from "react";
import { TogglePopupContext, toggleUseEffect, useCustomContext } from "../Context"
import Button from "./Button"

const Summons = () => {

    // const {isOpen, setOpen} = useCustomContext(ToggleSummonContext)
    const {whichPopup} = useCustomContext(TogglePopupContext)
    const popup = 'summons';
    const isOpen = whichPopup === popup;
    const [isHidden, setHide] = useState(!isOpen);
    toggleUseEffect(whichPopup, popup, isHidden, setHide);

    return(
    <div className='center'>
        <div className={`inventory-frame ${!isOpen &&'closed'}`} style={{visibility: isHidden?'hidden':'visible'}}>
            <div className="top-center inventory-title">Summons</div>

            <div className="top-right">
                <Button btnText='X' template={null}toggles={popup}/>
            </div>

            <div className="inventory-content center">

            </div>
        </div>
    </div>
    )
}

export default Summons