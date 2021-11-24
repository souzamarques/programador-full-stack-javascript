function show() {
    let element = document.getElementById("name")
    console.log(element.value)

    let elements = document.getElementsByName("phone")
    console.log(elements)
    console.log(elements[0].value)
    
    elements = document.querySelectorAll("div#phones input[name='phone']")
    console.log(elements[1].value)

    elements = document.getElementsByTagName("input")
    console.log(elements)
}