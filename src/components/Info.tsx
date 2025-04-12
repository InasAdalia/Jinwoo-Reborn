import InfoFrame from '../assets/info/frame-info.png'
import Icon from '@mdi/react';
import { mdiAlertCircleOutline } from '@mdi/js';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../stylesheets/index.css'
import Button from './Button.tsx'
import { useState } from 'react';
import { toggleUseEffect, useCustomContext, TogglePopupContext } from '../Context.tsx';

function Info(){    

    const {whichPopup} = useCustomContext(TogglePopupContext)
    const [isHidden, setHide] = useState(false);
    const popup = 'info';
    const isOpen = whichPopup === popup;

    toggleUseEffect(whichPopup, popup, isHidden, setHide); //activates a useEffect that listens for open/close of info

    return(
        <div className="center">
        {/* // style={{visibility: isHidden?'hidden':'visible'}}> */}
            <div className={` info-frame ${!isOpen &&'closed'}`} style={{visibility: isHidden?'hidden':'visible'}}>
                <img src={InfoFrame} alt="Info's Frame"/>

                <div className="top-center">
                    <Icon path={mdiAlertCircleOutline} size={0.8} className="me-2 mb-1" />  
                    NOTIFICATION
                </div>

                <div className="top-right">
                    <Button onClick={()=>{}} btnText={'X'} template={null}toggles={popup} />
                </div>

                <div className="center">
                    <p>You are qualified to become a player. 
                    Your heart will stop if you choose to not accept
                    </p>
                    <p>Accept?</p>
                </div>

                <div className='bottom-center'>
                    <Button onClick={()=>{}} btnText='YES' template={'button'} toggles={null}/>
                    <a className="mx-2"></a>
                    <Button onClick={()=>{}} btnText='NO' template={'button'} toggles={null}/>
                </div>
            </div>
        </div>
    )
}

export default Info