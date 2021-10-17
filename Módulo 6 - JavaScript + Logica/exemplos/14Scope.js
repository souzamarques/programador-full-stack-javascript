function novoNome() {
    nome = "Elemental"
}

function velocidade() {
    let velocidade = 20 // variável de escopo local.
}

function detalhes() {
    let velocity = 50
    if(velocity == 50) {
        velocity = 60
        var spaceshipName = "Elemental" // var faz com que a variavel seja declarada dentro do escopo mais elevado, que no caso é a função detalhes() 
        let spaceshipType = "Discovery" // irá pertencer apenas no escopo do if
    }

    console.log(velocity)
    console.log(spaceshipName)
    console.log(spaceshipType)
}

function novosDetalhes() {
    console.log(spaceshipName) // irá ser Undefined por conta da declaração com var
    console.log(spaceshipType) // erro por conta de que a variavel ainda nao foi declarada
    var spaceshipName = "Elemental" // como se tivesse ido para o topo da função. Como se fosse o primeiro item declarado da função
    let spaceshipType = "Discovery"
    console.log(spaceshipName)
    console.log(spaceshipType)
}

let nome = "Supernova" // variável de escopo global. Poderá ser acessada de qualquer lugar
console.log(nome)
novoNome()
console.log(nome)

velocidade()
console.log(velocidade)

detalhes()