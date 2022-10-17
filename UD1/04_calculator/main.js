// Declarar 2 variables con número e imprimir por consola (mediante console.log()) el valor de:
// Suma
// Resta
// Multiplicación
// División


// define variables
let x = 1, y = 2;

function suma(x, y) {
    resultado = x + y;
        return resultado;
}

function resta(x, y) {
    resultado = x - y;
        return resultado;
}

function multiplicacion(x, y) {
    resultado = x * y;
        return resultado;
}

function division(x, y) {
    resultado = x / y;
        return resultado;
}

// print sum, substract, multiply and divide
console.log("suma: " + suma(x,y));
console.log("resta: " + resta(x,y));
console.log("multiplicacion: " + multiplicacion(x,y));
console.log("division: " + division(x,y));

