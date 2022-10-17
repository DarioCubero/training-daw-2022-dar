function evenNumbers(value) {
    if ( !(value % 2) ){//PAR
        console.log(value);
    }
}

for (let index = 1; index < 100; index++) {
    evenNumbers(index);
}

// expected output 2,4,6,8,10......98