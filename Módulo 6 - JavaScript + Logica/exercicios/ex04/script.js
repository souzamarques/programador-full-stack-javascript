let anosLuz = prompt("Informe a distância em anos-luz")
let opcao = prompt("Escolha uma das opções para conversão:" + "\n1 - Parsec (pc)" + "\n2 - Unidade Astronômica (AU)" + "\n3 - Quilômetros (km)")

switch(opcao) {
    case '1':
        let unidade1 = "Parsec"
        let convert1 = anosLuz * 0.306601
        alert("Distância em Anos-Luz: " + anosLuz + "\nConversão desejada: " + unidade1 + "\nDistância Convertida: " + convert1)
        break;
    case '2':
        let unidade2 = "Unidade Astronômica"
        let convert2 = anosLuz * 63241.1
        alert("Distância em Anos-Luz: " + anosLuz + "\nConversão desejada: " + unidade2 + "\nDistância Convertida: " + convert2)
        break;
    case '3':
        let unidade3 = "Quilômetros"
        let convert3 = anosLuz * 9.5 * Math.pow(10, 12)
        alert("Distância em Anos-Luz: " + anosLuz + "\nConversão desejada: " + unidade3 + "\nDistância Convertida: " + convert3)
        break;
    default:
        alert("Distância em Anos-Luz: " + anosLuz + "\nUnidade não identificada: Conversão fora do escopo.")
}