class TransportSpaceship {
    constructor(name) {
        this.name = name
        this.currentVelocity = 0
    }

    set setVelocity(newVelocity) {
        if(newVelocity > 120) {
            this.currentVelocity = 120
        } else {
            this.currentVelocity = newVelocity
        }
    }

    get getVelocity() {
        return this.currentVelocity
    }
}

class ResourceProcessStation {
    constructor(name, monthlyProcessedLoad) {
        this.name = name
        this.monthlyProcessedLoad = monthlyProcessedLoad
    }

    get weeklyProcessedLoad() {
        return this.monthlyProcessedLoad / 4
    }
}

let spaceship = new TransportSpaceship("Transportadora")
// Por conta do set, ele irá interpretar como uma variável
spaceship.setVelocity = 130
console.log("Velocidade da nave " + spaceship.name + ": " + spaceship.getVelocity + "km/s")

let resourceProcessor = new ResourceProcessStation("Gaia", 1300)
console.log("\nQuantidade semanal de processamento de recurso: " + resourceProcessor.weeklyProcessedLoad)
resourceProcessor.monthlyProcessedLoad = 3120
console.log("Nova quantidade semanal de processamento de recurso: " + resourceProcessor.weeklyProcessedLoad)