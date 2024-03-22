// Exportação e importação:
import areaQuadrado from "./funcao.js";

console.log(areaQuadrado(5))

// Arrow Function:
function Soma01(a, b) {
    return a + b;
}

const Soma02 = (a, b) => {
    return a + b;
}

const Soma03 = (a, b) => a + b;

// Destructuring:
function MouseMove01(event) {
    const clientX = event.clientX
    const clientY = event.clientY
    const coordinates = `X: ${clientX} \nY: ${clientY}`;
    console.log(coordinates);
}

const MouseMove02 = (event) => {
    const {clientX, clientY} = event;
    console.log(`X: ${clientX} \nY: ${clientY}`)
}

const MouseMove03 = ({clientX, clientY}) => console.log(`X: ${clientX} \nY: ${clientY}`)

// document.documentElement.addEventListener('mousemove', MouseMove03);

// Arrays
const frutas =['banana', 'maçã', 'pêra']

const [banana, maca, pera] = frutas;

console.log(maca)

// Três Pontos (Rest):
const showList = (empresa, ...funcionarios) => {
    funcionarios.forEach(funcionario => {
        console.log(empresa, funcionario)
    });
}
showList('Senai', 'Carlos', 'Letícia', 'Bruno', 'Igor')

const somarNumeros = (...numeros) => {
    console.log(numeros.reduce((total, n) => total + n, 0))
}
somarNumeros(1, 5, 10, 15)

// Três Pontos (Spread):
const numeros = [12, 13, 21, 30, 4, 6]
const maior = Math.max(...numeros);

console.log(maior)

const carro = {
    cor: 'Preta',
    ano: 2018,
    modelo: 'Hilux'
}
const marcaCarro = {...carro, marca: 'Toyota'};

console.log(marcaCarro)

// Métodos Map & Filter:
const compras = [
    'R$ 200',
    '150',
    'R$ 550',
    'R$ 300',
    '550',
    'Shampoo',
    'Creme de gato'
]

const precosFiltro = compras.filter(preco => {
    const numerico = Number(preco);
    
    if(!isNaN(numerico)) {
        return preco;
    } else if (preco.includes('R$')) {
        return preco;
    }
})

const transformarPreco = precosFiltro.map(preco => preco.replace('R$ ', ''));

console.log(transformarPreco)

// Ordenador ternário:
const csa = 2
const crb = 2

let vencedor, empate = csa === crb ? true : false;

if (!empate) {
    vencedor = crb > csa ? 'CRB venceu' : 'CSA venceu';
} else {
    vencedor = 'As equipes empataram';
}

console.log(vencedor)

// Resultado alternado em variável/constante:
const situacaoAtiva = true;
const mensagem = situacaoAtiva && 'Situação ativa'

console.log(mensagem)