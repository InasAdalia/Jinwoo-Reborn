import Character from '../Character.tsx'
import { RightFrameProps } from '../../Props.tsx';
// import { useState } from 'react';




const RightFrame=({dialog}:RightFrameProps)=>{

    // const [count, setCount] = useState<number>(0);

    return(
        <div className="right-frame">
            <div className="dialog"
            // onClick={()=>{setCount(count+1)}}
            >
                <div className="dialog-text">
                    {dialog}
                </div>
                
            </div>
            <div className="character-frame">
                <Character character='jinwoo' emote='idle' />
            </div>
        </div>
    )
}

export default RightFrame;