import styled from "styled-components";

const Cores = {
  branco: '#fff',
  preto: '#111',
  amarelo: '#e1ce1b',
  rosa: '#f2d',
  verde: '#4aac46'
}

const Titulo = styled.h1 `color: ${Cores.verde};`

const Titulo2 = styled.h2 `color: ${Cores.preto};`

const Container = styled.div `
  width: 400px;
  height: 400px;
  margin: 0 auto;
  background-color: ${Cores.rosa};
`;

const App = () => {
  return (
    <Container>
      <Titulo>Hello world!</Titulo>
      <Titulo2>Seja bem-vindo!</Titulo2>
    </Container>
  );
}

export default App;