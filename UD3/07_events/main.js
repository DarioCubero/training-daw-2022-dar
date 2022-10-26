// A partir de la página web proporcionada, completar el código JavaScript para que:
// Cuando se pinche sobre el primer enlace, se oculte su sección relacionada
// Cuando se vuelva a pinchar sobre el mismo enlace, se muestre otra vez esa sección de contenidos
// Completar el resto de enlaces de la página para que su comportamiento sea idéntico al del primer enlace
// Cuando una sección se oculte, debe cambiar el mensaje del enlace asociado (pista: propiedad innerHTML)


window.onload = function(e) {
}

// function myOnClick(enlace, contenido){
//     let status = document.getElementById(contenido).style.display;

//     if (status === "none"){
//         document.getElementById(contenido).style.display = "block";
//         document.getElementById(enlace).innerText = "Ocultar texto";
//     }else{
//         document.getElementById(contenido).style.display = "none";
//         document.getElementById(enlace).innerText = "Mostrar texto";
//     }
// }

function showHide(num){
    let contenido = document.getElementById(`contenidos_${num}`);
    let enlace = document.getElementById(`enlace_${num}`);

    if (contenido.style.display === "block"){
        contenido.style.display = "none";   
        enlace.innerText = "Mostrar texto";
    }
    else{
        contenido.style.display = "block";
        enlace.innerText = "Ocultar texto";
    }
}