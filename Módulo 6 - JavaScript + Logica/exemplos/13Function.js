function greetPilot() {
    console.log("Bom dia, piloto!")
}

function speedUp(velocidade, aceleracao) {
    let novaVelocidade = velocidade + aceleracao
    console.log("Acelerando. Nova velocidade: " + novaVelocidade + "km/s")
}

greetPilot()

let velocidade = 50
let aceleracao = 30
console.log("Velocidade: " + velocidade + "km/s")
speedUp(velocidade, aceleracao)