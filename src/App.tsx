import styles from './App.module.css'
import { ContextProvider } from './Data/Context'
import LeftFrame from './Frames/LeftFrame'
import MainFrame from './Frames/MainFrame'
import RightFrame from './Frames/RightFrame'
import BottomFrame from './Frames/BottomFrame'

function App() {

  return (
    <div className={styles.app}>
      <ContextProvider>
        <h1 className={styles.topFrame}>{'Hospital'}</h1>
        
        <LeftFrame containerClass={styles.leftFrame}/>  

        <MainFrame containerClass={styles.mainFrame}/>

        <RightFrame
          containerClass={styles.rightFrame} 
          dialog={'huh, am I the only one seeing this?'}/>

        <BottomFrame containerClass={styles.bottomFrame}/>
      </ContextProvider>
    </div>
  )
}

export default App
