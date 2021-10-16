let nomeNave = prompt("Nome da nave")
let proibido = prompt("Informe um caractere proibido de " + nomeNave)
let nomeReverse = ""

for(let i = nomeNave.length - 1; i >= 0; i--) {
    if(nomeNave[i] == proibido) {
        alert("Caractere Proibido Encontrado!\nNome Reverso: " + nomeReverse)
        break
    }
    nomeReverse += nomeNave[i]
}
alert("Nome original da nave " + nomeNave + "\nNome após ocultação: " + nomeReverse)