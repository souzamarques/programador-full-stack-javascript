// "let spaceship = {}" ou "let spaceship = new Object()" é a declaração de um objeto.
let nave = {
    nome: "Fenix",
    quantTripulantes: 7,
    tipoNave: "Batalha"
}

console.log("Nome da nave: " + nave.nome)
console.log("Quantidade de tripulantes na nave " + nave["nome"] + ": " + nave.quantTripulantes + " tripulantes")
console.log("Tipo da nave " + nave.nome + ": " + nave["tipoNave"])

nave.engatada = false // a propriedade "engatada" será adicionada ao objeto "nave" 
nave["escudoNivel"] = 100 // outro método para atribuir uma propriedade ao objeto "nave"
console.log("A nave está engatada: " + nave["engatada"])
console.log("Nível do escudo da nave: " + nave.escudoNivel)