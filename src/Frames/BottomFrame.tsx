import clsx from "clsx";
import Button from "../Components/Button";
import styles from './BottomFrame.module.css'
import { useCustomContext, EqItemContext, MainFrameContext } from "../Data/Context";
import { addInvItem } from "../Data/GameData";

interface BottomFrameProps {
    containerClass?: string;
}

const BottomFrame = ( {containerClass} : BottomFrameProps )=>{

    const {eqItems} = useCustomContext(EqItemContext);

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
        <div className={clsx(styles.bottomFrame, containerClass)}>
            <div className="equipped-items">
                {/* <ItemBar category={"weapons"} context={eqItems} invBoxes={3}/> */}
                
            </div>
            

                {/* TEMP BUTTONS */}
                <Button  onClick={() => { addItem; } } btnText='ADD ITEM' template={'button-1'} clickable={true} />
                <Button  onClick={() => { enterPreFight(); } } btnText='FIGHT MODE' template={'button-1'} clickable={true} />
                <Button  onClick={() => { swapBg(); } } btnText='CHANGE BG' template={'button-1'} clickable={true} />
        </div>
    )
}

export default BottomFrame;