function speedDown(velocidade, printer) {
    do {
        printer(velocidade)
        velocidade = velocidade - 20
    } while(velocidade > 0)
    return velocidade
}

let printVelocidade = velocidade => {
    console.log("Velocidade atual da nave: " + velocidade + "km/s")
}

let naveVelocidade = 150
let novaVelocidade = speedDown(naveVelocidade, printVelocidade)
if(novaVelocidade < 0) {
    novaVelocidade = 0
}
console.log("Velocidade atual da nave: " + novaVelocidade + "km/s." + " A nave está parada e as comportas podem ser abertas.")