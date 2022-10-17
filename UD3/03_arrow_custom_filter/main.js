const assert = require('assert').strict;

function select(array, conditionCallback) {
    let result = []

    array.forEach(element => {
        if ((conditionCallback(element))) {
            result.push(element)
        }

    });
    return result
}

let values = [1, 2, 3, 5, 7, 13, 17, 23, 29]

// Al hacer la función flecha en una sola linea no hace falta escribir RETURN
let pairs = (value) => value % 2 === 0
     
function gt15(value) {
    return value > 15
}

function lt10(value) {
    return value < 10
}

// function oddLt10(value) {
//     return value % 2 === 1 && value < 10
// }

let oddLt10 = (value) => value % 2 === 1 && value < 10

let oddLt10x = (value) => {
    value % 2 === 1 && value < 10
}

// sólo pares
assert.deepStrictEqual(select(values, pairs), [2])

// mayores que 15
assert.deepStrictEqual(select(values, gt15), [17, 23, 29])

// menores de 10
assert.deepStrictEqual(select(values, lt10), [1, 2, 3, 5, 7])

// impares menores de 10
assert.deepStrictEqual(select(values, oddLt10), [1, 3, 5, 7])