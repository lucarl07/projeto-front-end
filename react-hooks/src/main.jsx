import React from 'react'
import ReactDOM from 'react-dom/client'
import { App, Count } from './Hooks'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    <Count/>
  </React.StrictMode>,
)
