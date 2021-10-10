alert("Bem vindo")
let nome = prompt("Informe seu nome")
let idade = prompt("Informe sua idade") 
let confirmacao = confirm("Você tem " + idade + " anos ?")
alert("Nome: " + nome)
alert("Idade: " + idade)
if(confirmacao == true) {
    alert("A idade está correta")
} else {
    alert("Idade está incorreta!")
}
alert("Nome: " + nome + "\nIdade: " + idade + "\nIdade está correta: " + confirmacao)