/** O QUE SÃO HOOKS? ↓ 
 * Os Hooks são funções especiais do React que permitem controlarmos o estado e o ciclo de vida dos componentes funcionais.
 * Abaixo, segue uma demonstração:
*/

import React from "react";

export const App = () => {
  /** MAS O QUE É O HOOK USE STATE? ↓
   * É uma função que retorna um Array com 2 valores. O primeiro valor guarda o dado do estado atual, que pode ser qualquer tipo de dado como strings, arrays, número, boolean, null, undefined ou objetos.
   * O segundo valor é uma função que pode ser utilizada para modificarmos o estado do primeiro valor.
   * Quando a função de modificação do estado é ativada, todos os componentes que dependerem do estado, serão renderizados e os seus filhos também. É isso que garante a reatividade de componentes funcionais no React.
  */
  
  const [ativo, setAtivo] = React.useState(true);
  const [btnAtivo, setBtnAtivo] = React.useState(false);

  return (
    <>
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100px",
        height: "100px",
        backgroundColor: ativo? "red" : "green"
      }}>
        <button onClick={() => setAtivo(!ativo)} disabled={!btnAtivo}>
          {ativo? "Banido." : "Desbanido!"}
        </button>
      </div>

      <p>
        <button onClick={() => setBtnAtivo(!btnAtivo)}>
          {btnAtivo? "Campo ativo" : "Campo inativo"}
        </button>
      </p>
    </>
  );
}

export const Count = () => {
  const [contar, setContar] = React.useState(0)

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "yellow",
      width: "200px",
      height: "100px",
      gap: "1rem"
    }}>
      <button onClick={() => setContar(contar + 1)}>
        {contar}
      </button>

      <button onClick={() => location.reload()}>
        Zerar a contagem
      </button>
    </div>
  );
}