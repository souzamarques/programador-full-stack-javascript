function greetCrew(message, ...names) {
    console.log(names)
    names.forEach(name => console.log(`${message}, ${name}`))
}

greetCrew("Seja bem-vindo", "Arthur", "John", "Maria")
