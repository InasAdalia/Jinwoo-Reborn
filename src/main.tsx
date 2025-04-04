import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './stylesheets/index.css'
import Game from './Game.tsx'
// import 'bootstrap/dist/css/bootstrap.min.css'




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Game />
  </StrictMode>,
)
