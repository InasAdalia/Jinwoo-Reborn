import Info from '../Info.tsx'
import Inventory from '../PlayerStuffs/Inventory.tsx'
import Summons from '../PlayerStuffs/Summons.tsx';
import { MainFrameContext, TogglePopupContext, useCustomContext } from '../../Context.tsx';
import SideQuest from '../PlayerStuffs/SideQuest.tsx';
import PreFight from '../PreFight.tsx';

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