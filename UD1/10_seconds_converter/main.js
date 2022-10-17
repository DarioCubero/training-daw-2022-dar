const assert = require('assert').strict;

function toHoursMinutesSeconds(value) {

    let hours = Math.trunc(value / 3600); 

    let rest = value - (3600 * hours)

    let minutes = parseInt(rest / 60)

    let seconds = rest - (minutes * 60)

    return `${hours}:${minutes}:${seconds}`
}

assert.deepStrictEqual(toHoursMinutesSeconds(3600), "1:0:0")
assert.deepStrictEqual(toHoursMinutesSeconds(3720), "1:2:0")
assert.deepStrictEqual(toHoursMinutesSeconds(3725), "1:2:5")
console.log('END')