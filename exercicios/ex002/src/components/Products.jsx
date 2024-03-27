/** ATIVIDADE 02
 * Requisitos:
 *  - Organize os produtos como mostrado em aula;
 *  - Mostre apenas produtos que forem mais caros que R$ 1500.
 */

const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];

const divProduto = (item) => {
  return (
    <div className="product">
      <h1 className="title">{item.nome}</h1>
      <p className="price">Preço: {item.preco}</p>
      <ul className="colors" style={
        {
          display: 'flex', 
          flexDirection: 'column', 
          gap: '0.25rem', 
          listStyleType: 'none'
        }
      }>
        {item.cores.map(cor => liCor(cor))}
      </ul>
    </div>
  );
}

const liCor = (cor) => {
  return (
    <li style={
      {
        padding: '0.5rem',
        maxWidth: '500px',
        backgroundColor: cor, 
        color: 'white'
      }
    }>{cor}</li>
  );
}

const App = () => {
  return (
    <section className="products">
      {produtos.map(produto => divProduto(produto))}
    </section>
  );
}

export default App;