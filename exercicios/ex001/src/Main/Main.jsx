const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
        { nome: 'Notebook', preco: 'R$ 2500' },
        { nome: 'Geladeira', preco: 'R$ 3000' },
        { nome: 'Smartphone', preco: 'R$ 1500' },
    ],
    ativa: true,
};

const mario = {
    cliente: 'Mario',
    idade: 31,
    compras: [
        { nome: 'Notebook', preco: 'R$ 2500' },
        { nome: 'Geladeira', preco: 'R$ 3000' },
        { nome: 'Smartphone', preco: 'R$ 1500' },
        { nome: 'Guitarra', preco: 'R$ 3500' },
    ],
    ativa: false,
};

const somarDespesas = (compras) => {
    let acumulo = 0;

    compras.forEach(compra => {
        let custo = Number(compra.preco.replace('R$ ',''))
        acumulo += custo;
    });

    return acumulo;
}

const App = () => {
    const dados = luana;
    const situacao = dados.ativa ? 'Ativa' : 'Inativa';

    return (
        <div>
            <p>Nome: <span>{dados.cliente}</span></p>
            <p>Idade: <span>{dados.idade}</span></p>
            <p>Situação: <span>{situacao}</span></p>
            <p>Gasto Total: <span>{somarDespesas(dados.compras)}</span></p>
            <p>...</p>
        </div>
    );
}

export default App;