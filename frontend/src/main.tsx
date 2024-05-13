import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { TwitchSearchChannelProvider } from './context/TwitchSearchChannelContext'
import './index.css'

const $app = document.getElementById('root') as HTMLElement

ReactDOM.createRoot($app).render(
  <React.StrictMode>
    <TwitchSearchChannelProvider>
      <App />
    </TwitchSearchChannelProvider>
  </React.StrictMode>
)
