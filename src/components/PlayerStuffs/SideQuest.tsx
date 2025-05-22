import { useState } from "react";
import { TogglePopupContext, toggleUseEffect, useCustomContext } from "../../Context";
import Button from "../Button";
import Character from "../Character";
import ItemChooser from "../ItemChooser";
import { ally } from "../../GameData";

const SideQuest = () => {

    const {whichPopup} = useCustomContext(TogglePopupContext)
    const [isHidden, setHide] = useState(false);
    const popup = 'haein';
    const isOpen = whichPopup === popup;

    toggleUseEffect(whichPopup, popup, setHide);

    return(
        <div className="center">
            <div className={`frame-2 side-quest ${!isOpen && 'closed'}`} style={{visibility: isHidden?'hidden':'visible'}}>
                <div className="top-center inventory-title">Hae-In</div>

                <div className="top-right">
                    <Button  onClick={()=>{}} btnText='X' template={null} toggles={popup}/>
                </div>

                <div className="center">
                    <Character character='haein' emote='idle' />
                </div>

                <div className="left">
                    <ItemChooser itemDetails={'hmm I wonder if she likes it'} buttonText="GIVE" buttonOnClick={()=>console.log('give')}/>
                </div>

                <div className="right side-quest-details">
                    <div className="status-title">[ status ]</div>
                    <div className="status-content">
                        <p>Lvl: {ally.level.curAmount} - {ally.levelStatus}</p>
                        <p>HP: 100%</p>
                    </div>
                   
                    <div className="abilities-title">[ abilities ]</div>
                    <div className="abilities-content">{ally.abilities}</div>

                    <div className="needs-title">[ needs ]</div>
                    <div className="needs-content">
                        <ul>
                            <li>Reach Lvl 5</li>
                            <li>cookie crumbs</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SideQuest;