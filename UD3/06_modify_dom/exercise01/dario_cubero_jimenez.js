
window.onload = function(e) {
    console.log('documento cargado')
    // Cambiar el título del segundo h2
    document.getElementsByTagName('h2')[1].innerText = "Magenta";

    // Seleccionar el elemento con id == username
    console.log(document.getElementById("username"));

    // Cambiar el color de todos los .first que estén dentro de un artículo
    document.querySelectorAll("article .first").forEach(x => x.style.color = "Magenta");

    // Seleccionar todos lo elementos li con class == item
    console.log(document.querySelectorAll("li.item"));

    // Seleccionar todos lo buttons dentro de class == buttons
    console.log(document.querySelectorAll(".buttons button"));

    // Cambiar el código de fondo del primer párrafo
    document.getElementsByTagName('p')[0].style.backgroundColor = "red"

    // Cambiar el color de los elementos buttons dentro de class == buttons
    console.log(document.querySelectorAll(".buttons button").forEach(x => x.style.backgroundColor = "Magenta"));

}