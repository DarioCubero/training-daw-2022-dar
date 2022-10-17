const assert = require('assert').strict;

function abs(x) {
    if(x < 0){
        return x*(-1)
    }
    return x;
}

assert.strictEqual(abs(4), 4)
assert.strictEqual(abs(-4), 4)
assert.strictEqual(abs(0), 0)