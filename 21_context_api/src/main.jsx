import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Thimcontext from './context/Thimcontext.jsx'

createRoot(document.getElementById('root')).render(
  <Thimcontext>
      <App />
      {/* aya je lakhi te output aave */}
      
  </Thimcontext>

  // rap karu kevai jethi puri app me context kari shaki
)
