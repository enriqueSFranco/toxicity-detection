import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChannelProvider } from './context/channelContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChannelProvider>
      <App />
    </ChannelProvider>
  </React.StrictMode>
)
