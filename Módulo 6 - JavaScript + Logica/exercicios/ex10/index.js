

const nave = [
    ["Fenix", 8, true], 
    ["Golias", 10, true], 
    ["Helmet", 5, false], 
    ["Elemental", 3, true], 
    ["Darwin", 15, false]
]

let ninePeople = nave.filter(element => { return element[1] >= 9 })
console.log(ninePeople)

let pendente = nave.findIndex(element => { return element[2] == false})
console.log(nave[pendente])

let naveCapsLock = nave.map(function(naveAtual) {
    let capsLock = naveAtual[0].toUpperCase()
    return capsLock
}) 
console.log(naveCapsLock)

/*
alert("Naves com mais de 9 tripulantes: " + ninePeople + 
"\nPrimeira nave com engate pendente: " + nave[pendente] +
"\nNaves Upper Case: " + naveCapsLock) 
*/