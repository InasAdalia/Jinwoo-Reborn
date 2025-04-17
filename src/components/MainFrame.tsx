import {MainFrameProps} from '../Props.tsx'
import Info from '../components/Info.tsx'
import Inventory from './Inventory.tsx'
import Summons from './Summons.tsx';
import { MainFrameContext, TogglePopupContext, useCustomContext } from '../Context.tsx';
import SideQuest from './SideQuest.tsx';
import PreFight from './PreFight.tsx';

const MainFrame = () =>{

    const {whichPopup} = useCustomContext(TogglePopupContext)
    const {mainContent} = useCustomContext(MainFrameContext);
    const tempBgList = [ 'hospital', 'beru', 'baran', 'barca' , 'igris']
    const bgImage = tempBgList.includes(mainContent)? mainContent : '';

    return(
        <>
            <div className="main-frame">
                <div className={`bg-image`}>
                    {bgImage!=='' && <img src={`../src/assets/bg/bg-${bgImage}.png`} style={whichPopup===null?{opacity:1.0}:{ opacity:0.6}} alt="bgImage"/>}
                </div>
                <div className='main-frame-content' >
                    {/* {info ? <Info /> : <Inventory /> } */}
                    {/* <Info/> */}
                    {/* <Inventory/> */}
                    {mainContent==='pre-fight' && <PreFight />}
                    <Info />
                    <Inventory />
                    <Summons />
                    <SideQuest />
                </div>
            </div>
        </>
    )
}

export default MainFrame;