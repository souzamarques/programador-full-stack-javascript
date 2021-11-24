class SpacialStation {
    constructor(name, platformsQuantity) {
        this.name = name
        this.platformsQuantity = platformsQuantity
    }
}

class Spaceship {
    constructor(name, type = "Descoberta") {
        this.name = name
        this.type = type
    }
}

let observatory = new SpacialStation("Observatório", 40)
console.log(observatory)

let darwin = new Spaceship("Darwin")
let helmet = new Spaceship("Helmet", "Batalha")
console.log(darwin)
console.log(helmet)