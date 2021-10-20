let spaceship = {
    name: "Supernova",
    type: "Batalha",
    crew: ["Cap. Silva","Ana Julia", "Thiago"]
}

spaceship.crew.push("Ten. Fernanda")
console.log(spaceship)

let spaceships = [
    { name: "Elemental", crewQuantity: 10 },
    { name: "Colossus", crewQuantity: 8},
    { name: "Helmet", crewQuantity: 15}
]

console.log("Nome da 1ª nave: " + spaceships[0].name)
console.log("Quantidade de tripulantes na nave " + spaceships[1].name + ": " + spaceships[1].crewQuantity)

spaceships.forEach(spaceSpace => {
    console.log("A nave " + spaceSpace.name + " tem " + spaceSpace.crewQuantity + " tripulantes")
})

let nave = {
    name: "Golias",
    maxCrew: 20,
    captain: {
        name: "Hugo Trent",
        age: 37
    }
}

console.log("Nome do capitão da nave " + nave.name + ": " + nave.captain.name)
console.log("Idade do capitão " + nave.captain.name + ": " + nave.captain.age + " anos")