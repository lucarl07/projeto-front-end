import React from 'react';
import './Modal.css';

const Modal = ({onclick, item}) => {
  const parsedName = item.charAt(0).toUpperCase() + item.slice(1);

  return (
    <>
      <button onClick={onclick}>{parsedName}</button>
    </>
  );
}

export default Modal;