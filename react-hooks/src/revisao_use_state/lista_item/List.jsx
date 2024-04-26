import React from "react";

const List = () => {
  const [items, setItems] = React.useState([])

  const addItem = () => {
    const itemIndex = items.length;
    const newItem = `item ${itemIndex}`
    setItems([...items, newItem])
  }

  const remItem = () => {
    items.pop();
    setItems([...items])
  }

  return (
    <>
      <button id="btnAddItem" onClick={() => addItem()}>
        Adicionar item
      </button>
      <button id="btnRemItem" onClick={() => remItem()}>
        Remover item
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