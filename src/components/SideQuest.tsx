import { useState } from "react";
import { TogglePopupContext, toggleUseEffect, useCustomContext } from "../Context";
import Button from "./Button";
import Character from "./Character";
import ItemChooser from "./ItemChooser";

const SideQuest = () => {

    const {whichPopup} = useCustomContext(TogglePopupContext)
    const [isHidden, setHide] = useState(false);
    const popup = 'haein';
    const isOpen = whichPopup === popup;

    toggleUseEffect(whichPopup, popup, isHidden, setHide);

    return(
        <div className="center">
            <div className={`frame-2 side-quest ${!isOpen && 'closed'}`} style={{visibility: isHidden?'hidden':'visible'}}>
                <div className="top-center inventory-title">Hae-In</div>

                <div className="top-right">
                    <Button btnText='X' template={null} toggles={popup}/>
                </div>

                <div className="center">
                    <Character character='haein' emote='idle' />
                </div>

                <div className="left">
                    <ItemChooser />
                </div>

                <div className="right">
                    RIGHT
                </div>
            </div>
        </div>
    )
}

export default SideQuest;