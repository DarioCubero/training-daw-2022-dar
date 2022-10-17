function first(array,number){
    let maxIndex = number;
    if (number < 0){
        maxIndex = 0
    }
    if (number > array.lenght){
        maxIndex = array.lenght
    }

    let result = []
    for (let i = 0; i<maxIndex; i++) {
        result.push(array[i])
    }

    return result
}

console.log(first( [7, 9, 0, -2],  1)); // [7]
console.log(first( [7, 9, 0, -2],  2)); // [7, 9]
console.log(first( [7, 9, 0, -2],  3)); // [7, 9, 0]
console.log(first( [7, 9, 0, -2],  6)); // [7, 9, 0, -2]


