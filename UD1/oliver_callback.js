function select(array, filter) {
    let result = []

    for (let i=0; i<array.length; i++) {
        let value = array[i]
        if (filter(value)) {
            result.push(value)
        }
    }

    return result
}

function isOdd(n) {
    return n % 2 === 0
}

function isGt4(n) {
    return n > 4
}


let array = [1,2,3,4,5,6]
select(array, isGt4)