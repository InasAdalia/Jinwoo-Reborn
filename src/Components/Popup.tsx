import clsx from "clsx";
import Icon from '@mdi/react';
import { mdiAlertCircleOutline } from '@mdi/js';
import { useCustomContext, TogglePopupContext } from "../Data/Context";
import styles from './Popup.module.css';
import pos from "../stylesheets/Positions.module.css";
import type React from "react";
import Button from "./Button";
import { useEffect, useState } from "react";


interface PopupProps {
    popup: 'info' | 'inventory' | 'summons' | 'sideQuest';
    frameTemplate?: 'frame-1' | 'frame-2' | 'frame-info';
    containerClass?: string;
    titleClass?: string;
    contentClass?: string;
    footerClass?: string;
    title?: React.ReactNode;
    content: React.ReactNode;
    footer?: React.ReactNode;
    closeBtn: boolean;
}

const Popup = 
    ({popup, 
    frameTemplate, 
    containerClass, 
    titleClass, 
    title, 
    contentClass, 
    content, 
    footer,
    footerClass,
    closeBtn}: PopupProps) => {
    
        const {whichPopup} = useCustomContext(TogglePopupContext);
        const [isHidden, setHide] = useState(whichPopup !== popup);
        const isOpen = whichPopup === popup;

        useEffect(() => {
            whichPopup===popup 
            ? (setHide(false)) 
            : (setTimeout(() => setHide(true), 500)); 
        }, [whichPopup]);

        return (
            <div 
            className={clsx(containerClass?? '', 
                !isOpen && styles.closed, 
                pos.center, 
                styles.popupContainer, 
                styles[frameTemplate ?? 'frame-1'])}
            style={{
                backgroundImage: `component/frames/${frameTemplate ?? 'frame-1'}.png`,
                visibility: isHidden ? 'hidden' : 'visible'}}>
                    
                {/* title */}
                {title && 
                    <div className={clsx(styles.popupTitle, titleClass ?? '')}>
                        {title}
                    </div>}

                {/* close button */}
                {closeBtn &&
                    <div className={pos.topRight}>
                        <Button  
                            onClick={() => { } }
                            btnText={'X'}
                            toggles={popup} 
                            clickable={true} />
                    </div>}

                {/* body content */}
                <div className={clsx(styles.popupContent, contentClass ?? '')}>
                    {content}
                </div>

                { footer && <div className={clsx(styles.popupFooter, footerClass ?? '')}>
                    {footer}
                </div>}
            </div>
        );
    }

export default Popup;