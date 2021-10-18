let naveNome = ["Colossus", " Elemental"," Helmet"]
console.log("Naves: " + naveNome)

let elementalPos = naveNome.indexOf(" Elemental")
console.log("A nave" + naveNome[1] + " se encontra na " + (elementalPos + 1) + "ª posição.")

console.log("Número de naves: " + naveNome.length + " naves disponíveis.")

naveNome.push(" Supernova") // Função utilizada para adicionar um novo elemento no final de um array.
console.log("Naves: " + naveNome)

naveNome.pop() // Função utilizada para remover o último elemento que está na última posição do array
console.log("Naves: " + naveNome)
let naveRemovida= naveNome.pop()
console.log("Última Elemento Removido:" + naveRemovida)

naveRemovida = naveNome.shift() // Função utilizada para remover o primeiro elemento que está na primeira posição do array.
console.log("Primeiro Elemento Removido: " + naveRemovida)
console.log("Naves atuais:" + naveNome)

naveNome.unshift("Fenix") // Função utilizada para inserir um elemento na primeira posição do array
console.log("Naves: " + naveNome)