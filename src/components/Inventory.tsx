import { useEffect, useState } from "react";
import Button from "./Button";
import { TogglePopupContext, toggleUseEffect, useCustomContext } from "../Context.tsx";
import ItemBar from "./ItemBar.tsx";


const Inventory = () => {
    
    //handles toggling of inventory
    const {whichPopup} = useCustomContext(TogglePopupContext)
    const popup = 'inventory';
    const isOpen = whichPopup === popup;
    const [isHidden, setHide] = useState(!isOpen);
    toggleUseEffect(whichPopup, popup, isHidden, setHide);

    //handles arrow&scroll direction
    const [isNextWeapon, setWeaponDir] = useState(true); 
    const [isNextOthers, setOthersDir] = useState(true);

    const handleScroll=(category: 'weapon'|'others', [isNextDir, setDir]: [boolean, React.Dispatch<React.SetStateAction<boolean>>])=>{

        const whichBar= document.querySelector(`.${category}-category`)?.querySelector('.items-bar-bottom'); //the item-bar element of that category
        if (whichBar) {

            const scrollWidth = (whichBar.scrollWidth - whichBar.clientWidth);
            const newScrollLeft = isNextDir ? whichBar.scrollLeft + scrollWidth / 2 : whichBar.scrollLeft - scrollWidth ;
            whichBar.scrollLeft = newScrollLeft;

            const isRightmost = Math.ceil(newScrollLeft + whichBar.clientWidth) >= whichBar.scrollWidth;
            setDir(!isRightmost);
            console.log(whichBar.scrollLeft, newScrollLeft, whichBar.clientWidth, whichBar.scrollWidth);
        }
    }

    useEffect(()=>{}, [isNextWeapon, isNextOthers]);

    const renderArrowBtn = (dir: 'right'|'left', cat: 'weapon'|'others', [isNextDir, setDir]: [boolean, React.Dispatch<React.SetStateAction<boolean>>])=>{
        return <Button onClick={()=>{handleScroll(cat, [isNextDir, setDir])}} btnText={""} toggles={null} template={`arrow-${dir}`} />
    }

    document.querySelectorAll('.items-bar')?.forEach(bar=> bar.addEventListener('scroll', (e)=>{ e.preventDefault() }))

    return (
        <div className="center">
            <div className={`inventory-frame ${!isOpen && 'closed'}`} style={{visibility: isHidden?'hidden':'visible'}} >
                <div className="top-center inventory-title">Inventory</div>

                <div className="top-right">
                    <Button onClick={()=>{}} btnText='X' template={null} toggles={popup}/>
                </div>

                <div className="inventory-content center">
                    
                    <div className="weapon-category">
                        Weapon & Powers
                        <div className="inv-items-bar">
                            <ItemBar category="weapons" titlePos="bottom"/>
                            {renderArrowBtn(`${isNextWeapon?'right':'left'}`, 'weapon', [isNextWeapon, setWeaponDir])}
                        </div>
                        
                        
                    </div>
                    <div className="others-category mt-3n">
                        Others
                        <div className="inv-items-bar">
                            <ItemBar category="others" titlePos="bottom"/>
                            {renderArrowBtn(`${isNextOthers?'right':'left'}`, 'others', [isNextOthers, setOthersDir])}
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Inventory;