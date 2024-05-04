import React from 'react';
import Input from './Input';

const App = () => {
  const [nome, setNome] = React.useState("");

  return (
    <>
      <Input 
        label="nome" 
        id="nome"
        value={nome}
        setValue={setNome}
      />
      <p>{nome}</p>
    </>
  );
}

export default App;