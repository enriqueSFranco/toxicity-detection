import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { TwitchProvider } from './context/TwitchContext'
import './index.css'

const $app = document.getElementById('root') as HTMLElement

ReactDOM.createRoot($app).render(
  <React.StrictMode>
    <TwitchProvider>
      <App />
    </TwitchProvider>
  </React.StrictMode>
)
