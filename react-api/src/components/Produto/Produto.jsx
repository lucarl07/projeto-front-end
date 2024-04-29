const Produto = ({data}) => {
  return (
    <div className='itemData'>
      <h1>{data && data.nome}</h1>
      <h2>{`R$ ${data && parseFloat(data.preco).toFixed(2)}`}</h2>
      <img src={data && data.fotos[0].src} alt={data && data.fotos[0].titulo} />
    </div>
  );
}

export default Produto