let nave = [ ["Elemental", 7], ["Helmet", 13], ["Golias", 5], ["Supernova", 10] ]

console.log(nave[0])
nave.push(["Colossus", 8])
console.log("Naves e tripulantes: " + nave)

// Acessando a primeira posição do quarto array
console.log("Primeira posição do quarto array: " + nave[3][0])

nave = [ ["Elemental", 7], ["Helmet", 13], ["Golias", 5], ["Supernova", [true, false] ] ]
// Acessando true dentro de um array que se encontra no quarto array 
console.log("Primeiro elemento do array dentro do quarto array: " + nave[3][1][0])