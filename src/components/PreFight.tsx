import { useCustomContext, EqItemContext, InvItemContext, TogglePopupContext } from "../Context";
import ItemType, { curEnemy } from "../GameData";
import ItemChooser from "./ItemChooser";

const PreFight = ()=>{

    const {whichPopup} = useCustomContext(TogglePopupContext)
    const {eqItems, setEqItems} = useCustomContext(EqItemContext);
    const enemy = 'baran'

    const equipItems=(item: ItemType|null)=>{
        console.log('to be equipped: ' + item);
        item && setEqItems([... eqItems, item])
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
                    <div className="enemy-name">{curEnemy.name}</div>
                    <img className="enemy-sprite" src={`../src/assets/enemies/sprite-${enemy}.png`} alt="" />
                    <div className="details">
                        <p>Power: {curEnemy.strength.curAmount}</p>
                        <p>Speed: {curEnemy.speed.curAmount}</p>
                        <p>Intelligence: {curEnemy.intelligence.curAmount}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreFight;