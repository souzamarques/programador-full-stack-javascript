let nomeNave = prompt("Informe o nome da nave:")
let dobra = prompt("Deseja entrar em dobra espacial ? \n1 - Sim\n2 - Não")
if(dobra == 1) {
    let quantDobra = 1
    while(dobra == 1) {
        dobra = prompt("Deseja realizar a próxima dobra ?\n1 - Sim\n2 - Não")
        if(dobra == 1) {
            quantDobra = quantDobra + 1
        } else if (dobra == 2) {
            alert("Nome da nave: " + nomeNave + "\nQuantidade de dobras espaciais realizadas: " + quantDobra + " vezes")
            break;
        } else {
            alert("Opção Inválida! Tente novamente")
        }
    }
} else if(dobra == 2) {
    alert("Nome da nave: " + nomeNave + "\nNenhuma dobra foi realizada.")
} else {
    alert("Opção inválida")
}