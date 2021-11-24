console.log(Math.pow(5, 3))
console.log(Math.PI)
console.log(Math.sqrt(3600))

let myBirthday = new Date(2021, 10, 04)
console.log(myBirthday)

let today = Date.now()
console.log(today)

function mostraHora() {
    let data = new Date()

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

const timer = setInterval(function() {
    console.log(mostraHora())
}, 1000)

setTimeout(function() {
    clearInterval(timer)
}, 6000)

setTimeout(function() {
    console.log('Tempo Esgotado')
}, 7000)