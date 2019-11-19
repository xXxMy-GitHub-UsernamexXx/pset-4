const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

let lowerBound = null;
let upperBound = null;

do {

        lowerBound = Number(readlineSync.question("\nLower bound: "));
        upperBound = Number(readlineSync.question("Upper bound: "));

} while ((((lowerBound < MIN)
|| (lowerBound > MAX))
|| ((upperBound < MIN)
|| (upperBound > MAX)))
|| ((Number.isNaN(lowerBound)
|| Number.isNaN(upperBound))
|| (!Number.isInteger(lowerBound)
|| !Number.isInteger(upperBound))));

let addend = ((lowerBound % 2) === 0) ? lowerBound : lowerBound + 1;
let total = null;

while (addend < upperBound) {

        total = total + addend;
        addend = addend + 2;

};

if (total != lowerBound) {

        total = ((upperBound % 2) === 0) ? total + upperBound : total;

};

console.log("\n" + total.toLocaleString() + ".");
