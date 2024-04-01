/* eslint-disable react/prop-types */
/** UITLIZANDO PROPRIEDADES EM REACT.JS 
 * Projeto de Front-End | lucarl07
*/

// Propriedades / Props
const Cabecalho = (props) => {
  return (
    <h1>{props.children}</h1>
  );
}

const Titulo = (props) => {
  return (
    <h1 style={{color: props.cor}}>
      {props.texto}
    </h1>
  );
}

const Subtitulo = (props) => {
  return (
    <p style={
      {
        fontWeight: 700, 
        fontSize: (props.escala / 4) + 'rem',
        color: props.cor
      }
    }>
      {props.texto}
    </p>
  );
}

const Botao = (props) => {
  return (
    <button style={
      {
        padding: (props.espacamento + 'rem'),
        fontSize: (props.tamanhoDaFonte + 'rem'),
        color: props.corDoTexto
      }
    }>
      {props.texto}
    </button>
  );
}

const App = () => {
  return (
    <>
      <Cabecalho>
        <p>Luiz Carlos</p>
      </Cabecalho>

      <Titulo texto="Meu título" cor="red" />
      <Subtitulo texto="Nosso 1º subtítulo!" escala="4" />

      <Titulo texto="Meu outro título" cor="green" />
      <Subtitulo texto="Nosso 2º subtítulo!" escala="5" />

      <Titulo texto="Meu terceiro título" cor="blue" />
      <Subtitulo texto="Nosso 3º subtítulo!" escala="6" />

      <Botao texto="Um botão!" tamanhoDaFonte="1.2" corDoTexto="#9c5251" espacamento="0.5" />
    </>
  );
}

export default App;
