import clsx from "clsx";
import styles from './RightFrame.module.css';
import Character from "../Character/Character";

interface RightFrameProps{
    dialog?: string
    containerClass?: string;
}

const RightFrame=({dialog, containerClass}:RightFrameProps)=>{

    // const [count, setCount] = useState<number>(0);

    return(
        <div className={clsx(styles.rightFrame, containerClass)}>
            <div className={styles.dialog}
            // onClick={()=>{setCount(count+1)}}
            >
                <p className={styles.dialogText}>
                    {dialog}
                </p>
                
            </div>
            <Character
            containerClass={styles.character} 
            character='jinwoo' 
            emote='idle' />
        </div>
    )
}

export default RightFrame;