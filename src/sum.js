const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

let lowerBound = null;
let upperBound = null;

do {

    lowerBound = readlineSync.question("Lower bound: ");
    upperBound = readlineSync.question("Upper bound: ");

} while ((((lowerBound < MIN)
|| (lowerBound > MAX))
|| ((upperBound < MIN)
|| (upperBound > MAX)))
|| ((Number.isNaN(lowerBound)
|| Number.isNaN(upperBound))
|| (lowerBound > upperBound)));

let addends = [];
