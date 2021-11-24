// Classe
class Spaceship {
    constructor(name, crewQuantity, type, quant) {
        this.name = name
        this.crewQuantity = crewQuantity
        if(type == '1') {
            this.type = "Batalha"
            this.quant = quant
        } else {
            this.type = "Transporte"
            this.quant = quant
        }
        this.velocity = 0
    }

    static get decelarationRate() {
        return 0.17
    }

    speedUp(acceleration) {
        this.velocity += (acceleration * (1 - Spaceship.decelarationRate))
    }
}

// Funções
function cadastrarNave() {
    let name = prompt("Informe o nome da nave")
    let crewQuantity = prompt("Informe a quantidade de tripulantes")
    let type, quant
    do {
        type = prompt("Informe o tipo da nave\n1 - Batalha\n2 - Transporte")
        switch(type) {
            case '1':
                quant = prompt("Informe a quantidade de armas disponíveis") 
                break;
            case '2':
                quant = prompt("Informe a quantidade de lugares que a nave comporta")
                break;
            default:
                alert("Opção Inválida!")
        }
    } while((type != '1') && (type != '2'))
    return name, crewQuantity, type, quant
}

function menu() {
    let option
    while((option != '1') && (option != '2') && (option != '3')) {
        option = prompt("Escolha uma das opções:\n1 - Acelerar a nave\n2 - Trocar a nave\n3 - Imprimir e sair")
    }
    return option
}

function acelerarNave(spaceship) {
    let acceleration = prompt("Informe a aceleração da nave em km/s")
    spaceship.speedUp(acceleration)
}

function imprimirDados(spaceships) {
    let spaceshipList = ""
    spaceships.forEach(spaceship => {
        spaceshipList +=    "Nome: " + spaceship.name + "\nQuantidade de tripulantes: " + spaceship.crewQuantity 
                            + " tripulante(s)\n" + "\nNave de " + spaceship.type + "\nVelocidade atual: " + spaceship.velocity + "km/s\n"
    })
    alert(spaceshipList)
}

// Programa Principal
let spaceship = cadastrarNave()
let spaceships = []

let option
do {
    option = menu()
    switch(option) {
        case '1':
            acelerarNave(spaceship)
            break;
        case '2':
            let spaceship = cadastrarNave()
            break;
        case '3':
            imprimirDados(spaceships)
            break;
        default:
            alert("Opção Inválida!")
    }
} while(option != 3)