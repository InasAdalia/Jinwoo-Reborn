import { useCustomContext, EqItemContext, InvItemContext, TogglePopupContext } from "../Context";
import Item from "../Item";
import ItemChooser from "./ItemChooser";

const PreFight = ()=>{

    const {whichPopup} = useCustomContext(TogglePopupContext)
    const {eqItems, setEqItems} = useCustomContext(EqItemContext);
    const enemy = 'baran'

    const equipItems=(item: Item|null)=>{
        console.log('to be equipped: ' + item);
        const eqItemsArray = [... eqItems];
        item && setEqItems(new Set([... eqItemsArray, item]))
    }
    
    const renderEquipButton = () =>{
        const eqItemsArray = [... eqItems];
        return eqItemsArray.length >=3
        ? <ItemChooser itemDetails={'Damage: 30'} buttonText="FIGHT" buttonOnClick={()=>console.log('fight')} />
        :  <ItemChooser itemDetails={'Damage: 30'} buttonText="EQUIP" buttonOnClick={equipItems} />
    }

    return(
        <div className="pre-fight-frame" style={whichPopup===null?{opacity:1.0}:{ opacity:0.6}}>
            <div className="left">
                {renderEquipButton()}
            </div>
            <div className="center">VS</div>
            <div className="right">
                <div className="enemy-frame">
                    <div className="enemy-name">The Ant King</div>
                    <img className="enemy-sprite" src={`../src/assets/enemies/sprite-${enemy}.png`} alt="" />
                    <div className="details">
                        <p>HP: 1020</p>
                        <p>Power: 304</p>
                        <p>Speed: 100</p>
                        <p>Intelligence: 205</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreFight;