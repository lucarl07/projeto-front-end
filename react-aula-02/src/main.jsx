import React from 'react'
import ReactDOM from 'react-dom/client'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Footer/>
  </React.StrictMode>,
)
