function Pessoa(nome) {
    this.nome = nome

    this.dizOi = function() {
        console.log(this.nome + " diz oi")
    }
}

function Funcionario(nome, cargo, salario){
    this.cargo = cargo
    //this.salario = salario

    let _salario = salario

    this.getSalario = function(){
        return _salario
    }

    this.setSalario = function(valor) {
        if (typeof valor === 'number'){
            _salario = valor
        }
        else {
            console.log('o valor inserido deve ser do tipo numerico')
        }

    }

    this.aumento = function(){
        const novoSalario = _salario * 1.1
        _salario = novoSalario
    }

    Pessoa.call(this, nome)
}

function Estagiario(nome) {
    Funcionario.call(this, nome, "Estagiario", 2000)

    this.aumento = function(){
        const novoSalario = this.getSalario() * 1.07
        this.setSalario(novoSalario)
    }
}

function Gerente(nome) {
    Funcionario.call(this, nome, "Gerente", 10000)

    this.aumento = function(){
        const novoSalario = this.getSalario() * 1.15
        this.setSalario(novoSalario)
    }
}


const pessoa1 = new Pessoa("Pedro")

const funcionario1 = new Funcionario(pessoa1.nome, "dev front-end", 5000)
const funcionario2 = new Estagiario("Joao")
const funcionario3 = new Gerente("Maria")


funcionario1.aumento()

console.log(funcionario1.getSalario())

funcionario2.aumento()

console.log(funcionario2.getSalario())

funcionario3.aumento()

console.log(funcionario3.getSalario())
