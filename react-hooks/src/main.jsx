import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './revisao_use_state/contador/App'
import List from './revisao_use_state/lista_item/List'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    <br />
    <List/>
  </React.StrictMode>,
)
