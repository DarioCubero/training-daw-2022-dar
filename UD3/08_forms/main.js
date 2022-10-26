// El botón enviar sólo debe estar habilitado si se han marcado los 2 checks
// El combo de opciones sólo estará habilitado si se pulsa “si” en el primer check
// Nombre y apellidos son obligatorios. Si no se han rellenado al pulsar el botón, informar al usuario
// El tamaño máximo de la descripción es de 80 carácteres
// Implementar algún mecanismo para prevenir el doble submit


window.onload = function() {
    checkCheckbox(); //Realiza una comprobación antes de comenzar
    // console.log(document.main_form.elements) //Muestra todos los elementos del formulario
    // document.getElementById('pregunta_si').onchange = showValue
    // document.getElementById('pregunta_no').onchange = showValue
    // document.getElementById('pregunta_nsnc').onchange = showValue
}


function checkRadio(){
    let statusYes = document.getElementById("pregunta_si").checked;
    console.log(statusYes);
}

function checkCheckbox(){
    let statusCondiciones = document.getElementById("condiciones").checked;
    let statusPrivacidad = document.getElementById("privacidad").checked;

    if (statusCondiciones && statusPrivacidad){
        document.getElementById("submit").disabled = false;
    }else{
        document.getElementById("submit").disabled = true;
    }
}

function showValue(e) {
     console.log('changed-->' + e.target.value)
}