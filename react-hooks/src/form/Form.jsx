import React from "react";

const Form = () => {
  const [nome, setNome] = React.useState("")

  const clickSubmit = (event) => {
    event.preventDefault()
    console.log(event);
  }

  return (
    <form onSubmit={clickSubmit}>
      <h2>{nome}</h2>
      <label htmlFor="inNome">Nome:</label>
      <input 
        type="text" 
        id="inNome"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />
      <input type="submit" value="Enviar" />
    </form>
  );
}

export default Form;