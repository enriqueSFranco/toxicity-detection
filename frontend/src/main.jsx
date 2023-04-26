import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChannelProvider } from './context/channelContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChannelProvider>
    <App />
  </ChannelProvider>
)
