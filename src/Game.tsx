import { createContext, useState } from "react"
import LeftFrame from "./components/LeftFrame"
import MainFrame from "./components/MainFrame"
import RightFrame from "./components/RightFrame"
import TopFrame from "./components/TopFrame"
// import './stylesheets/index.css'
import { GameProvider} from "./Context.tsx"



export const Game=()=>{
    
    return(
        <GameProvider>
            <TopFrame title={'Hospital'}/>
            <div className="hor-frame">
                <LeftFrame/>
                <MainFrame bgImage={'hospital'}/>
                <RightFrame dialog={'huh, am I the only one seeing this?'}/>
            </div>
        </GameProvider>
    )
}
export default Game;