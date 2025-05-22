import LeftFrame from "./components/Frames/LeftFrame.tsx"
import MainFrame from "./components/Frames/MainFrame.tsx"
import RightFrame from "./components/Frames/RightFrame.tsx"
// import './stylesheets/index.css'
import { GameProvider} from "./Context.tsx"
import BottomFrame from "./components/Frames/BottomFrame.tsx"



export const Game=()=>{
    
    return(
        <GameProvider>
             {/*TOP FRAME  */}
            <div className="top-frame">{'Hospital'}</div>

            {/* MIDDLE HORIZONTAL FRAME */}
            <div className="hor-frame">
                <LeftFrame/>
                <MainFrame />
                <RightFrame dialog={'huh, am I the only one seeing this?'}/>
            </div>

            {/* BOTTOM FRAME */}
            <BottomFrame />
        </GameProvider>
    )
}
export default Game;