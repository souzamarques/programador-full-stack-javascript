let partidaDataEntrada = prompt("Data de partida (DD/MM/YYYY)")

let partidaData = moment(partidaDataEntrada, "DD/MM/YYYY")

let hoje = moment()

let dataDif = hoje - partidaData

let opcao = prompt("Escolha como gostaria de exibir o tempo de partida\n1 - Segundos\n2 - Minutos\n3 - Horas\n4 - Dias")

switch(opcao) {
    case '1':
        let segundosPartida = Math.round(dataDif / 1000)
        alert("Tempo de vôo: " + segundosPartida + " segundos")
        break;
    case '2':
        let minutosPartida = Math.round(dataDif / 1000 / 60)
        alert("Tempo de vôo: " + minutosPartida + " minutos")
        break;
    case '3':
        let horasPartida = Math.round(dataDif / 1000 / 3600)
        alert("Tempo de vôo: " + horasPartida + " horas")
        break;
    case '4':
        let diasPartida = Math.round(dataDif / 1000 / 3600 / 24)
        alert("Tempo de vôo: " + diasPartida + " dias")
        break;
    default:
        alert("Opção Inválida!")
}