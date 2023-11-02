// const carroDoJoao = {
//     modelo : 'Fiesta',
//     fabricante : 'Ford',
//     anoModelo : 2020,
//     anoFabricacao : 2019,

//     acelerar: function(){
//         console.log('Vrum')
//     }
// }

// const carroDaMaria = {
//     modelo : 'Ka',
//     fabricante : 'Ford',
//     anoModelo : 2021,
//     anoFabricacao : 2020,

//     acelerar: function(){
//         console.log('Vrum')
//     }
// }

function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo
    this.fabricante = fabricante
    this.anoModelo = anoModelo
    this.anoFabricacao = anoFabricacao

    this.acelerar = function(){
        console.log('Vrum')
    }
}

const carroDoJoao = new Carro("Fusion", "Ford", 2023, 2022)

const carroDaMaria =  new Carro("Polo", "WW", 2014, 2013)

const nome = "Pedro"
const idade = 25
const ehMaior = true
const conhecimento = ["html", "css", "javascript"]

const pessoa = {
    nome: nome, 
    idade: idade,
    ehMaior: ehMaior,
    conhecimento : conhecimento,
}

Object.freeze(pessoa)

pessoa.nome = 'Joao'

console.log(pessoa.nome)
console.log(pessoa['nome'])

function exibeAtributo(nomeAtributo) {
    console.log(pessoa[nomeAtributo])
}

exibeAtributo("nome")

console.log(Object.keys(pessoa).length)
console.log(Object.values(pessoa))



// console.log(typeof nome)
// console.log(typeof idade)
// console.log(typeof ehMaior)
// console.log(typeof conhecimento)
// console.log(typeof pessoa)
