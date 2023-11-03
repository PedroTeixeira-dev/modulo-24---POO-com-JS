function UsaForca(nome, idade) {
    this.nome = nome
    this.idade = idade
}

function Jedi(nome, idade, caminho){
    UsaForca.call(this, nome, idade)

    this.caminho = caminho

    this.frase = function(){
        console.log("Um jedi usa a forca para conhecimento e defesa, nunca para ataque")
    }


}

function Sith(nome, idade, caminho){
    UsaForca.call(this, nome, idade)
    
    this.caminho = caminho

    this.frase = function(){
        console.log("Nao ha medo, ha poder")
    }


}

const jedi1 = new Jedi("obi-wan", 30, "luz")
const jedi2 = new Jedi("Yoda", 930, "luz")
const sith1 = new Sith("Vader", 26, "escuridao")

jedi1.frase()
sith1.frase()

console.log(jedi1)

console.log(sith1)