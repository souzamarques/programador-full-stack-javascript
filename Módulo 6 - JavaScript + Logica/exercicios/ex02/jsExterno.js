alert("Seja bem-vindo")
let nome1 = prompt("Informe o seu nome")
let idade1 = prompt("Informe sua idade")
alert("Segunda pessoa")
let nome2 = prompt("Informe seu nome")
let idade2 = prompt("Informe sua idade")
let difIdade = idade1 - idade2

if(idade1 > idade2) {
    alert("Nome da pessoa mais velha: " + nome1 + "\nIdade de " + nome1 + ": " + idade1 + " anos")
    alert("Nome da pessoa mais nova: " + nome2 + "\nIdade de " + nome2 + ": " + idade2 + " anos")
    alert("A diferença de idades entre " + nome1 + " e " + nome2 + " é de " + difIdade + " ano(s)")
} else if(idade2 > idade1) {
    difIdade = difIdade * (-1)
    alert("Nome da pessoa mais velha: " + nome2 + "\nIdade do(a) " + nome2 + ": " + idade2 + " anos")
    alert("Nome da pessoa mais nova: " + nome1 + "\nIdade do(a) " + nome1 + ": " + idade1 + " anos")
    alert("A diferença de idades entre " + nome2 + " e " + nome1 + " é de " + difIdade + " ano(s)")
} else if(difIdade == 0){
    alert("Ambos, " + nome1 + " e " + nome2 + " possuem " + idade1 + " anos")
}