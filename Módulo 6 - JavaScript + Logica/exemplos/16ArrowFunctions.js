// Por hora, podemos dizer que Arrow Function é apenas uma simplificação de uma função anônima. 
/*
const doubleVelocity = (velocity) => {
    return velocity * 2
} */

const doubleVelocity = velocity => velocity * 2 /* Quando a Arrow Function tiver apenas uma linha.
                                                     Irá entender que o retorno será velocity * 2.
                                                     É possível também remover os parênteses quando se
                                                     tem apenas um parâmetro.
                                                  */      
console.log(doubleVelocity(60))