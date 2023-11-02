function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome

    this.dizOi = function() {
        console.log(this.nome + " diz oi")
    }
}

function Funcionario(nome, sobrenome, cargo, salario){
    this.cargo = cargo
    //this.salario = salario

    let _salario = salario

    this.getSalario = function(){
        return `O salario de ${this.nome} e ${_salario}`
    }

    this.setSalario = function(valor) {
        if (typeof valor === 'number'){
            _salario = valor
        }
        else {
            console.log('o valor inserido deve ser do tipo numerico')
        }

    }

    Pessoa.call(this, nome, sobrenome)
}


const pessoa1 = new Pessoa("Pedro", "Teixeira")

const funcionario1 = new Funcionario(pessoa1.nome, pessoa1.sobrenome,  "dev front-end", 5000)

funcionario1.dizOi()

console.log(pessoa1)
console.log(funcionario1)

funcionario1.setSalario(7000)

console.log(funcionario1.getSalario())

