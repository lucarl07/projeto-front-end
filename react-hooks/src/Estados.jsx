/** O QUE SÃO ESTADOS? ↓ 
 * O estado de uma aplicação representa as característica dela naquele momento.
 * Abaixo, segue uma demonstração:
*/

const App = () => {
  const ativo = true; 

  return (
    <button disabled={!ativo}>
      {ativo? "Botão ativo" : "Botão inativo" }
    </button>
  );
}

export default App;