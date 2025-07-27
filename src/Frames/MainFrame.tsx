import clsx from "clsx";
import { useCustomContext, TogglePopupContext, MainFrameContext } from "../Data/Context";
import styles from './MainFrame.module.css'
import Inventory from "../Inventory/Inventory";
import Info from "../Info/Info";
import Summons from "../Summons/Summons";
import SideQuest from "../SideQuest/SideQuest";

interface MainFrameProps {
    containerClass?: string;
  }


const MainFrame = ({containerClass}: MainFrameProps) =>{

    const {whichPopup} = useCustomContext(TogglePopupContext)
    const {mainContent} = useCustomContext(MainFrameContext);
    const tempBgList = [ 'hospital', 'beru', 'baran', 'barca' , 'igris']
    const bgImage = tempBgList.includes(mainContent)? mainContent : '';

    function renderPopup(){
        // setTimeout(() => {
            switch(whichPopup){
                case 'inventory':
                    return <Inventory />
                // case 'info':
                //     return <Info />
                // case 'summons':
                //     return <Summons />
                // case 'haein':
                //     return <Haein />
                default:
                    return null;
            }
        // }, 250)

    }

    function renderContent() {
        // fighting/loading
        return null; 
    }

    return(
        <>
            <div className={clsx(styles.mainFrame, containerClass)}>
                <div className={styles.bgImage}>
                    {bgImage!=='' && <img src={`/assets/bg/bg-${bgImage}.png`} style={whichPopup===null?{opacity:1.0}:{ opacity:0.6}} alt="bgImage"/>}
                </div>
                {renderContent()}
                <Info infoActions={['accept']} />
                <Inventory />
                <Summons />
                <SideQuest />
            </div>
        </>
    )
}

export default MainFrame;