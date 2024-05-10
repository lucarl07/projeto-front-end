import styled from "styled-components";

const Cores = {
  branco: '#fff',
  preto: '#111',
  amarelo: '#e1ce1b',
  rosa: '#f2d',
  verde: '#4aac46'
}

export const Titulo = styled.h1 `color: ${Cores.verde};`

export const Titulo2 = styled.h2 `color: ${Cores.preto};`

export const Container = styled.div `
  width: 400px;
  height: 400px;
  margin: 0 auto;
  background-color: ${Cores.rosa};
`;