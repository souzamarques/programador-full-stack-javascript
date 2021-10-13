let spaceship = "Golias"
let velocidade = 80

console.log("Velocidade maior que 90km/h:", velocidade == 90)
console.log("Velocidade maior que 80km/h:", velocidade == "80") // "true" porque JavaScript é de tipagem fraca
console.log("Velocidade maior que 80km/h:", velocidade === "80") // false porque === considera o tipo de dado da variável "velocidade", que é numérica
console.log("Velocidade diferente de 80km/h:", velocidade != "80") // false porque não está considerando o tipo de dado da variável "velocidade"
console.log("Velocidade diferente de 80km/h:", velocidade !== "80") // !== considera o tipo exato da variável "velocidade"

console.log("Golias > Jack:", spaceship > "Jack")
console.log("Golias > Mercurio:", spaceship > "Mercurio")
console.log("Golias > Godzilla:", spaceship > "Godzilla")
console.log("Golias >= Golias: ", spaceship >= "Golias")
console.log("Golias < Cranium:", spaceship < "Cranium")