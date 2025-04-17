import { EqItemContext, useCustomContext } from "../Context"
import ItemBar from "./ItemBar"

const BottomFrame = ()=>{

    const {eqItems} = useCustomContext(EqItemContext);

    return(
        <div className="bottom-frame">
            <div className="equipped-items"><ItemBar category={"weapons"} context={eqItems} invBoxes={3}/></div>
            
        </div>
    )
}

export default BottomFrame