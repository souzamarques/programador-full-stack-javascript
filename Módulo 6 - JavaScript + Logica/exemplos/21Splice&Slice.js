let naveNome = ["Elemental", "Darwin", "Artemis", "Supernova"]
console.log("Naves: " + naveNome)

//                                                SPLICE
// Primeiro Parâmetro: irá na posição um do array (Contagem a partir de 0)
// Segundo Parâmetro: irá remover dois elementos: elemento da posição um e o seguinte
// Terceiro, Quarto e Quinto Parâmetro: Os elementos serão adicionados no lugar dos dois elementos excluídos.
let removerNome =  naveNome.splice(1, 2, "Deméter", "Puller", "Golias")

console.log("Naves: " + naveNome)
console.log("Elementos excluídos no Splice: " + removerNome)
console.log("---------------------------------------------------")
let nomes = ["Lucas", "Souza", "Marques"]
console.log("Nomes: " + nomes)
let removerLucas =  nomes.splice(1, 2) // irá remover dois elementos a partir da posição um (Contagem a partir de 0)
console.log("Nome restante: " + nomes)
console.log("Nomes excluídos no Splice: " + removerLucas)
console.log("---------------------------------------------------")
// -------------------------------------------------------------------------------------------------------------------

//                                                SLICE
let nomeCC = ["Joao", "Leo", "Dane", "Mateus", "Pedro"]
let nomeExtraido = nomeCC.slice(1, 3) // É incluido apenas os elementos da posição um e dois. 
                                      // O elemento da posição três "Mateus" não é incluído. (Contagem a partir de 0)
console.log("Nomes: " + nomeCC)
console.log("Nomes extraídos no Slice: " + nomeExtraido)