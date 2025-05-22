import { useCustomContext, EqItemContext } from "../../Context";
import ItemBar from "../PlayerStuffs/ItemBar";

const BottomFrame = ()=>{

    const {eqItems} = useCustomContext(EqItemContext);

    return(
        <div className="bottom-frame">
            <div className="equipped-items"><ItemBar category={"weapons"} context={eqItems} invBoxes={3}/></div>
            
        </div>
    )
}

export default BottomFrame;