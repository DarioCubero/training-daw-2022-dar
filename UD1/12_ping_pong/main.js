function pingPong(index) {
    if (index % 5 == 0 && index % 10 != 0) {
        console.log(index + "...PING");
    }else if (index % 10 == 0){
        console.log(index + "...PONG");
    }else{
        console.log(index);
    }
}

for (let index = 0; index < 100; index++) {
    pingPong(index)
    
}

// expected output
// 1
// 2
// 3
// 4
// 5 PING
// 6
// 7
// 8
// 9
// 10 PONG
// 11
// 12
// 13
// 14
// 15 PING
// 16
// 17
// 18
// 19
// 20 PONG