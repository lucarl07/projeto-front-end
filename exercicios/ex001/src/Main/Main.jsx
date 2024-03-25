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

const nivelDeGastos = (despesa) => {
    let userStatus = document.querySelector('.user-status')

    if (despesa < 10000) {
        userStatus.style.color = '#3CB043'
        return 'Você está no caminho certo!';
    } else {
        userStatus.style.color = '#D30000'
        return 'Você está gastando muito!';
    }
}

const App = () => {
    const dados = luana;
    const situacao = dados.ativa ? 'Ativa' : 'Inativa';
    const despesa = somarDespesas(dados.compras)

    return (
        <div>
            <p>Nome: <span>{dados.cliente}</span></p>
            <p>Idade: <span>{dados.idade}</span></p>
            <p>Situação: <span className="user-status">{situacao}</span></p>
            <p>Gasto Total: <span>{despesa}</span></p>
            <p>{nivelDeGastos(despesa)}</p>
        </div>
    );
}

export default App;