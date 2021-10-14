let nome = prompt("Informe o nome do piloto")
let velocidade = 0
velocidade = prompt("Informe a velocidade da nave em km/h")
let confirmacao = confirm("Você tem certeza que quer ir a " + velocidade +"km/h ?")

if(confirmacao == false) {
    velocidade = prompt("Informe a nova velocidade da nave em km/h")
}
if(velocidade <= 0){
    alert(nome + " sua nave está parada. Considere partir e aumentar a velocidade.")
    velocidade = 0
} else if(velocidade < 40) {
    alert(nome + " sua nave está devagar. Podemos acelerar mais.")
} else if((velocidade >= 40) && (velocidade < 80)) {
    alert(nome + " sua nave está em uma boa velocidade.")
} else if((velocidade >= 80) && (velocidade < 100)){
    alert(nome + " sua nave está em alta velocidade. Considere diminuir.")
} else {
    alert(nome + " sua nave está em uma velocidade perigosa! Controle automático forçado para sua segurança.")
    velocidade = 70
}

alert("Nome do piloto: " + nome + "\nVelocidade atual da nave: " + velocidade + "km/h")