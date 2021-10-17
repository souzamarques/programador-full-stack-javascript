let nomeNave = prompt("Informe o nome da nave")
let velocidade = 0
let opcao = 1

function speedUp(velocidade, acelerar) {
    let velocidadeAcelerar = velocidade + acelerar
    return velocidadeAcelerar
}

function speedDown(velocidade, desacelerar) {
    let velocidadeDesacelerar
    if((velocidade <= 5)) {
        velocidadeDesacelerar = 0
        return velocidadeDesacelerar
    } else {
        velocidadeDesacelerar = velocidade - desacelerar
        return velocidadeDesacelerar
    }
}

function imprimirDados(nomeNave, velocidade) {
    alert("Nome da nave: " + nomeNave + "\nVelocidade atual: " + velocidade + "km/s")
}

do { 
    opcao = prompt("Deseja acelerar ou desacelerar a nave em 5km/s\n 1 - Acelerar\n2 - Desacelerar\n3 - Sair")
    if(opcao == 1) {
        velocidade = speedUp(velocidade, 5)
        imprimirDados(nomeNave, velocidade)
    } else if(opcao == 2){
        velocidade = speedDown(velocidade, 5)
        imprimirDados(nomeNave, velocidade)
    } else if((opcao > 3) || (opcao <= 0)) {
        alert("Opção Inválida!")
    }
} while(opcao != "3")

alert("Fim do Programa")

/*
***********************************************************************************
***********************************************************************************
                            RESOLUÇÃO DO PROFESSOR
***********************************************************************************
***********************************************************************************

let spaceshipName = prompt("Digite o nome da nave")
let spaceshipVelocity = 0
let chosenOption
function showMenu() {
    let option
    while(option != "1" && option != "2" && option != "3" && option != "4") {
        option = prompt("O que deseja fazer?\n" +
                        "1- Acelerar a nave em 5km/s\n" +
                        "2- Desacelerar a nave em 5km/s\n" +
                        "3- Imprimir dados de bordo\n" +
                        "4- Sair de programa")
    }
    return option
}
function speedUp(velocity) {
    let newVelocity = velocity + 5
    return newVelocity
}
function slowDown(velocity) {
    let newVelocity = velocity - 5
    if(newVelocity < 0) {
        newVelocity = 0
    }
    return newVelocity
}
function printSpaceshipBoardData(name, velocity) {
    alert("Espaçonave: " + name + "\nVelocidade: " + velocity + "km/s")
}
do {
    chosenOption = showMenu()
    switch(chosenOption) {
        case "1":
            spaceshipVelocity = speedUp(spaceshipVelocity)
            break
        case "2":
            spaceshipVelocity = slowDown(spaceshipVelocity)
            break
        case "3":
            printSpaceshipBoardData(spaceshipName, spaceshipVelocity)
            break
        default:
            alert("Encerrando programa de bordo")
    }
} while(chosenOption != "4")

*/ 