let nomeNave = prompt("Informe o nome da nave")
let novoNome = ""
let caractere = prompt("Qual caractere de " + nomeNave + " deseja substituir ?")
let subCaractere = prompt("Qual caractere deseja incluir no lugar de " + caractere + " ?")

for(let i = 0; nomeNave.lenght; i++) {
  if(nomeNave[i] == caractere) {
    novoNome[i] += subCaractere
  } else {
    novoNome[i] += nomeNave[i]
  }
}

alert("Antigo nome da nave: " + nomeNave + "\nNome atual da nave" + novoNome)