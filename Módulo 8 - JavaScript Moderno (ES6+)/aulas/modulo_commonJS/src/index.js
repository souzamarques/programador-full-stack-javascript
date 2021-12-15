const Planet = require('./planet')
const SolarSystem = require('./solar_system')
const moment = require('moment')

const earth = new Planet("Terra", 50100000)
earth.rotate

SolarSystem.planets.push(earth)
SolarSystem.planets.push(new Planet("Marte", 144800000))
SolarSystem.planets.push(new Planet("Mercúrio", 74800000))
SolarSystem.planets.push(new Planet("Saturno", 4270000000))

console.log(SolarSystem)

console.log(moment().format("h:mm"))
