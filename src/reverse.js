const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;

let integer = null;

do {

        integer = Number(readlineSync.question("\n\nPositive integer: "));

} while (((integer > MAX)
|| (integer < MIN))
|| (Number.isNaN(integer)
|| !Number.isInteger(integer)));

/*
Math.trunc(integer);
/10
*/
