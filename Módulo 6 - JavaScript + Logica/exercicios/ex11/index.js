function menu() {
    let option
    while((option != "1") && (option != "2")) {
        option = prompt("Escolha uma das opções\n" +
        "1 - Acelerar a nave (km/s)\n" +
        "2 - Parar a nave")
    }   
    return option
}

function speedUp() {
    let aux = spaceship.velocity
    let acceleration = Number(prompt("Informe o quanto deseja acelerar (km/s)"))
    aux += acceleration
    if(aux > spaceship.maxVelocity) {
        alert("Não é possível aumentar a velocidade" +
        "\nVelocidade da nave: " + spaceship.velocity +
        "\nVelocidade máxima permitida: " + spaceship.maxVelocity)
    } else {
        spaceship.velocity += acceleration
    }
}

function stop() {
    alert("Nome da nave: " + spaceship.spaceshipName + 
    "\nTipo da nave: " + spaceship.type + 
    "\nVelocidade que a nave estava: " + spaceship.velocity + "km/s")
}

// Dados da nave
let spaceship = {
    spaceshipName: "",
    type: "",
    velocity: 0,
    maxVelocity: ""
}

// "Programa Principal"
let option
spaceship.spaceshipName = prompt("Informe o nome da nave")
spaceship.type = prompt("Informe o tipo da nave")
spaceship.maxVelocity = Number(prompt("Informe a velocidade máxima que a nave poderá atingir"))

do {
    option = menu()
    switch(option) {
        case "1":
            speedUp()
            break;
        case "2":
            stop()
            break;
        default:
            alert("Finalizando o mapeamento de velocidade")
    }
} while(option != "2")