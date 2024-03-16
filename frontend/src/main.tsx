import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChannelProvider } from './context/channelContext'
import './index.css'

const $app = document.getElementById('root') as HTMLElement

ReactDOM.createRoot($app).render(
  <React.StrictMode>
    <ChannelProvider>
      <App />
    </ChannelProvider>
  </React.StrictMode>
)
