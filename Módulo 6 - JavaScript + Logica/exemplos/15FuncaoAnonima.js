console.log(speedUp(60, 10))
console.log(doubleSpeed(50)) // Erro. Não poderá ser acessada antes da inicialização.

/*
Funções Anônimas: por serem atribuídas em variáveis, elas seguem a regra da chamada
                  de uma variável. Ocorrerá um erro na linha 2, pois a variável
                  doubleSpeed (linha 10), foi declarada com um let e ela ainda não
                  possui nada 
*/

let doubleSpeed = function(velocity) {
    return velocity * 2
}

function speedUp(velocity, acceleration) {
    return velocity + acceleration
}