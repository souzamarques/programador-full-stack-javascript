let nave = ["Deméter", "Darwin", "Supernova", "Fenix", "Puller"]

// Função forEach percorrerá o array, e para cada elemento, ele irá chamar o callback declarado
nave.forEach(function(naveAtual, index) {
    console.log("Nave: " + naveAtual + "\nÍndice: " + index)
})

let naveCapsLock = nave.map(function(naveAtual) {
    let capsLock = naveAtual.toUpperCase()
    return capsLock
}) 
console.log("Nave Upper Case: " + naveCapsLock)

// Função filter retornará um novo array
let sevenChars = nave.filter(element => { return element.length >= 7 })
console.log("Nave com 7 caracteres ou mais: " + sevenChars)

// Função find retornará o primeiro elemento que satisfaça a condição. (Não retornará um novo array como a função filter)
let fiveChars = nave.find(element => { return element.length == 5 }) 
console.log("Nave com 5 caracteres: " + fiveChars)