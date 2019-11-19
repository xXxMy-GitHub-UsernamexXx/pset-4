const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;

let integer = null;

do {

        integer = Number(readlineSync.question("\n\nPositive integer: "));

} while ((((integer > MAX)
|| (integer < MIN))
|| (Number.isNaN(integer)
|| !Number.isInteger(integer)));

let reverse = null;
integer = String(integer);

for (let i = integer.length; i > 0; i--) {


        if (i > 0) {
                remainder = remainder / 10;
                remainder = Math.floor(remainder);
        };
        
};
