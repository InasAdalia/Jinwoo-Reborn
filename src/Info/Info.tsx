import styles from './Info.module.css';
import pos from "../stylesheets/Positions.module.css";
import clsx from 'clsx';
import Popup from '../Components/Popup';
import Button from '../Components/Button';

type InfoActions = 'accept' | 'decline' | 'next' | 'ok';

interface InfoProps{
    containerClass?: string;
    infoActions?: InfoActions[];
}


const Info = ({containerClass, infoActions}: InfoProps) => {

    

    function renderButtons() {
        return (
            infoActions?.map((action, index) => {
                return (
                    <Button 
                        key={index}
                        onClick={() => { } }
                        btnText={action.charAt(0).toUpperCase() + action.slice(1)}
                        wrapperClass={styles.actionButton}
                        template={'button-1'} 
                        clickable={true} />
                );
            })
        );
    }

  return (
    // <div className={clsx(pos.center, styles.infoContainer)}>
      <Popup 
        popup={'info'}
        frameTemplate='frame-info'
        title={
            <h2 className={clsx(styles.title)}>Info</h2>
        }
        contentClass={styles.popupContent}
        content={(
            <>
                <p>You have been reborn as a player.</p>
                <p>Your heart will stop if you choose to not accept. accept?</p>
            </>
        )} 
        footer={
            infoActions && <div className={styles.buttonWrapper}>
                {renderButtons() }
            </div>
        }
        closeBtn={true} />
    // </div>
  );
}

export default Info;