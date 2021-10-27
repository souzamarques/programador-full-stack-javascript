class Spaceship {
    constructor(name, maxCrew, maxRecommendedVelocity) {
        this.name = name
        this.maxCrew = maxCrew
        this.maxRecommendedVelocity = maxRecommendedVelocity
        this.currentVelocity = 0
    }

    speedUp(acceleration) {
        this.currentVelocity += acceleration
        if(this.currentVelocity > this.maxRecommendedVelocity) {
            console.log("Velocidade máxima ultrapassada\nDiminua a velocidade ou poderá causar danos a nave")
        }
    }
}

class TransportSpaceship extends Spaceship {
    speedUp() {
        console.log("Naves de transporte só aumentam a velocidade em 1km/s")
        this.currentVelocity += 1
    }
}

let transportSpaceship = new TransportSpaceship("Transportadora", 4, 100)
transportSpaceship.speedUp()
console.log(transportSpaceship)

// Mesmo com o parâmetro, o JavaScript busca o método apenas pelo nome, o parâmetro não é obrigatório.
// Sendo assim, o método chamado será o da classe TransportSpaceship
transportSpaceship.speedUp(130)
console.log(transportSpaceship)