import React from "react";
import ButtonModal from "./ButtonModal";
import Modal from "./Modal";

const App = () => {
  const [active, setActive] = React.useState(false)

  return (
    <>
      <ButtonModal setModal={setActive}/>
      <Modal modal={active} setModal={setActive}/>
    </>
  );
}

export default App;