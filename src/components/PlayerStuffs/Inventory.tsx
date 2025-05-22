import { useEffect, useState } from "react";
import Button from "../Button.tsx";
import { InvItemContext, TogglePopupContext, toggleUseEffect, useCustomContext } from "../../Context.tsx";
import ItemBar from "./ItemBar.tsx";


const Inventory = () => {
    
    //handles toggling of inventory
    const {whichPopup} = useCustomContext(TogglePopupContext)
    const popup = 'inventory';
    const isOpen = whichPopup === popup;
    const [isHidden, setHide] = useState(!isOpen);
    toggleUseEffect(whichPopup, popup, setHide);

    const {invItems} = useCustomContext(InvItemContext);

    //handles next/prev arrows & scroll direction
    const [isNextWeapon, setWeaponDir] = useState(true); 
    const [isNextOthers, setOthersDir] = useState(true);

    const handleScroll=(category: 'weapons'|'others', [isNextDir, setDir]: [boolean, React.Dispatch<React.SetStateAction<boolean>>])=>{

        const whichBar= document.querySelector(`.${category}-category`)?.querySelector('.items-bar-bottom'); //the item-bar element of that category
        if (whichBar) {
            //scrolls the item-bar
            const scrollWidth = whichBar.clientWidth;
            const newScrollLeft = isNextDir ? whichBar.scrollLeft + scrollWidth / 2 : whichBar.scrollLeft - scrollWidth ;
            whichBar.scrollLeft = newScrollLeft; 

            //flips the arrow if necessary
            const isRightmost = Math.ceil(newScrollLeft + whichBar.clientWidth) >= whichBar.scrollWidth;
            setDir(!isRightmost); 

            // console.log(whichBar.scrollLeft, newScrollLeft, whichBar.clientWidth, whichBar.scrollWidth);
        }
    }

    const renderArrowBtn = (dir: 'right'|'left', cat: 'weapons'|'others', [isNextDir, setDir]: [boolean, React.Dispatch<React.SetStateAction<boolean>>])=>{
        return <Button  onClick={()=>{handleScroll(cat, [isNextDir, setDir])}} 
        btnText={""} toggles={null} template={`arrow-${dir}`} />
    }

    return (
        <div className="center">
            <div className={`inventory-frame ${!isOpen && 'closed'}`} style={{visibility: isHidden?'hidden':'visible'}} >
                <div className="top-center inventory-title">Inventory</div>

                <div className="top-right">
                    <Button  onClick={()=>{}} btnText='X' template={null} toggles={popup}/>
                </div>

                <div className="inventory-content center">
                    
                    <div className="weapon-category">
                        Weapon & Powers
                        <div className="inv-items-bar">
                            <ItemBar category="weapons" context={invItems} invBoxes={12}/>
                            {renderArrowBtn(`${isNextWeapon?'right':'left'}`, 'weapons', [isNextWeapon, setWeaponDir])}
                        </div>
                        
                        
                    </div>
                    <div className="others-category mt-3n">
                        Others
                        <div className="inv-items-bar">
                            <ItemBar category="others" context={invItems} invBoxes={12}/>
                            {renderArrowBtn(`${isNextOthers?'right':'left'}`, 'others', [isNextOthers, setOthersDir])}
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Inventory;