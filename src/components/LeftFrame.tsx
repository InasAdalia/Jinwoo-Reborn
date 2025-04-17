import { useState } from "react";
import { MainFrameContext, useCustomContext } from "../Context";
import { addInvItem } from "../GameData";
import Button from "./Button";


const LeftFrame=()=>{

    const addItem = addInvItem();
    const {setMainContent} = useCustomContext(MainFrameContext);
    const tempBgList = [ 'hospital', 'beru', 'baran', 'barca' , 'igris']

    function swapBg(){
        setMainContent(tempBgList[Math.floor(Math.random() * tempBgList.length)])
    }

    function enterPreFight(){
        setMainContent('pre-fight')
    }
    return(
        <div className="left-frame">
            {/* MP,HP, Level */}
            {/* Inventory, Summon, Haein Button */}
            <div className="status">
                <p>LVL: 1</p>
                <p>MP: 50</p>
                <p>HP: 50</p>
            </div>
            <div className="action-buttons">
                <Button  onClick={()=>{}} btnText='' toggles={'info'} template={'info-button'} />
                <Button  onClick={()=>{}} btnText='INVENTORY' toggles={'inventory'} template={'button'} />
                <Button  onClick={()=>{}} btnText='SUMMONS' toggles={'summons'} template={'button'} />
                <Button  onClick={()=>{}} btnText='HAEIN' toggles={'haein'} template={'button'} />
                <button className="" onClick={addItem}>ADD</button>
                <button className="" onClick={()=>{enterPreFight(); console.log('FIGHT MODE')}}>FIGHT MODE</button>
                <button className="" onClick={()=>{swapBg(); console.log('change bg')}}>CHANGE BG</button>
            </div>
        </div>
    )
}

export default LeftFrame;