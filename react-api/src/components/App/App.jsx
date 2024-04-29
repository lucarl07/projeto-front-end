import React from 'react';
import Modal from '../Modal/Modal';
import Produto from '../Produto/Produto';
import './App.css'

const App = () => {
  const [data, setData] = React.useState(null);

  async function getData(item) {
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${item}`)

    const json = await response.json()

    setData(json)
    console.log(data);
  }

  return (
    <>
      <div className="buttons">
        <Modal onclick={() => getData('tablet')} item="tablet" />
        <Modal onclick={() => getData('notebook')} item="notebook" />
        <Modal onclick={() => getData('smartphone')} item="smartphone" />
      </div>
      {data && <Produto data={data} />}
    </>
  );
}

export default App;