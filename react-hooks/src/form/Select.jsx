import React from "react";

const Select = () => {
  const [select, setSelect] = React.useState("");

  return (
    <form>
      <select 
        id="select"
        value={select} 
        onChange={({target}) => setSelect(target.value)}
      >
        <option disabled value="">Selecione...</option>
        <option value="Sesi">Sesi</option>
        <option value="Senai">Senai</option>
        <option value="IEL">IEL</option>
      </select>
      <p>
        <strong>Sua instituição é:</strong> {select}
      </p>
    </form>
  );
}

export default Select;