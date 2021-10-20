let spacialStation = {
    name: "Fox",
    platformsQuantity: 10, // Sempre utilizar esse formato de variável no momento de declaração 
    "new name": "Estelar", // forma aceita para declarar uma nova proprieda do objeto
    true: false,
    2: "Descoberta"
}

// console.log(spacialStation.2) erro, pois js entende que o 2 é um número
console.log(spacialStation["2"])

// console.log(spacialStation. new name) erro, pois o js não entenderá o espaço em branco
console.log(spacialStation["new name"])