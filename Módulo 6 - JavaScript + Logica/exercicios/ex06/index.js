let nomeNave = prompt("Informe o nome da nave")
let novoNome = ""
let caractere = prompt("Qual caractere de " + nomeNave + " deseja substituir ?")
let subCaractere = prompt("Qual caractere deseja incluir no lugar de " + caractere + " ?")

for (let i = 0; i < nomeNave.length; i++) {
    if (nomeNave[i] == caractere) {
        novoNome += subCaractere
    } else {
        novoNome += nomeNave[i]
    }
}

alert("Antigo nome da nave: " + nomeNave + "\nNome atual da nave: " + novoNome)