/** O QUE É USE STATE?
 * O estado de uma aplicação representa as características dela naquele momento.
 */

import React from "react";
import './UseState.css'

const App = () => {
  const [active, setActive] = React.useState(true);
  const [count, setCount] = React.useState(0);

  const statement = active === true ? 'Você só pode me clicar uma vez!' : 'Agora já foi...'

  return (
    <>
      <button id="btn01"
        disabled={!active} 
        onClick={() => {
          window.alert('Hasta la vista...');
          setActive(!active);
        }
      }>
        {statement}
      </button>

      <button id="btn02"
        onClick={() => setCount(count + 1)}
      >
        {'Número do contador: ' + count}
      </button>
    </>
  );
}

export default App;