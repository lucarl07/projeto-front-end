/** EXERCÍCIO 01 - VERIFICAR FINANÇAS
 * Regras:
 * 1. Mostre os dados da aplicação, como apresentado na aula
 * 2. Não utilize CSS externo, use o style para mudar as cores
 * 3. Se a situação estiver ativa pinte de verde, inativa vermelho
 * 4. Se o gasto for maior que 10000 mostre uma mensagem
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Main/Main'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)