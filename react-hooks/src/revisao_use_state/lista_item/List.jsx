import React from "react";

const List = () => {
  const [items, setItems] = React.useState(['item 1', 'item 2'])

  const HandleClick = (newItem) => {
    setItems([...items, newItem])
  }

  return (
    <>
      <button onClick={() => HandleClick('Novo item!')}>
        Adicionar
      </button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;