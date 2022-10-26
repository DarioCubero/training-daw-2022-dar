// Ordenar las matrices por suma, ascendente o descendente Dada una matriz de matrices (es decir, una matriz multidimensional),
// cada una de las cuales contiene solo valores numéricos, ordene estas matrices por la suma de los elementos que contiene.

const orderBySum = (array) => {
    // console.log(someArray);
    // for (let index = 0; index < array.length; index++) {
    //     let valor = element.reduce( (pv, cv) => pc + cv )
    //     // console.log(`${element}: ${suma(element)}`)
    // }

    //  array.sort( (a,b) => a.reduce( (pv,cv) => pv + cv ) - b.reduce( (pv,cv) => pv + cv ) )

    // let sortedArray = array.sort( 
    //     (a,b) => 
    //     a.reduce((pv,cv) => pv + cv ) -
    //     b.reduce( (pv,cv) => pv + cv )
    // )

    let sortedArray = array.sort(
        function(a,b) {
            let sumaA = a.reduce( (pv,cv) => pv + cv )
            let sumaB = b.reduce( (pv,cv) => pv + cv )
            return sumaA - sumaB
        }
    )
    console.log(sortedArray);
}

function suma(array) {
    let total = 0
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        total += element
    }
    return total
}

orderBySum([[1,3], [4,2], [2,1]])
// [[2,1], [1,3], [4,2]]