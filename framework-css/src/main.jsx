import React from 'react'
import ReactDOM from 'react-dom/client'
import Article from './components/Article/Article'
import App from './components/App/App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Article />
  </React.StrictMode>,
)
