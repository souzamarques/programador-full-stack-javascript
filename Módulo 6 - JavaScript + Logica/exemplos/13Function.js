function greetPilot(nome, mensagem = "Olá") {
    console.log(mensagem + ", " + nome)
}

function speedUp(velocidade, aceleracao) {
    let novaVelocidade = velocidade + aceleracao
    return novaVelocidade
}

function speedDown(velocidade, desacelerar) {
    let velocidadeBaixa = velocidade - desacelerar
    console.log("Desacelerando. Estamos a: " + velocidadeBaixa + "km/s")
    return velocidadeBaixa
}

greetPilot("João Felippe")

let velocidade = 50
let aceleracao = 30
console.log("Velocidade: " + velocidade + "km/s")
velocidade = speedUp(velocidade, aceleracao)
console.log("Velocidade atual: " + velocidade + "km/s")
let desacelerar = 15
speedDown(velocidade, desacelerar)