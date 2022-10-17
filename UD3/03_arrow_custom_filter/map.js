let array = ["1", "2", "3"]

// let result = array.map(function(value){
//     if (value % 2 === 0){
//         return value +5
//     }
//     return value * 2
// })

// let result = array
//     .map(function (value) {
//         return parseInt(value)
//     })
//     .map(function (value) {
//         return value + 5
//     })

let result = array
    .map((value, index) => {
        return { id: index, value: parseInt(value) * index }
    })

console.log(result);