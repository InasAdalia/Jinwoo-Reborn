import { createContext, useState } from "react"
import LeftFrame from "./components/LeftFrame"
import MainFrame from "./components/MainFrame"
import RightFrame from "./components/RightFrame"
import TopFrame from "./components/TopFrame"
// import './stylesheets/index.css'
import { GameProvider, MainFrameContext, useCustomContext} from "./Context.tsx"
import BottomFrame from "./components/BottomFrame.tsx"



export const Game=()=>{

    return(
        <GameProvider>
            <TopFrame title={'Hospital'}/>
            <div className="hor-frame">
                <LeftFrame/>
                <MainFrame />
                <RightFrame dialog={'huh, am I the only one seeing this?'}/>
            </div>
            <BottomFrame />
        </GameProvider>
    )
}
export default Game;