//Basic Arithmetic operations : 
    // let a = 10;
    // let b = 3;

    // console.log(a + b); // 13
    // console.log(a - b); // 7
    // console.log(a * b); // 30
    // console.log(a / b); // 3.3333333333333335
    // console.log(a % b); // 1
    // console.log(a ** b); // 1000


//Number Object : 
    // console.log(Number.MAX_VALUE); // 1.7976931348623157e+308  --> largest representable positive number
    // console.log(Number.MIN_VALUE); // 5e-324
    // console.log(Number.NaN); // NaN
    // console.log(Number.NEGATIVE_INFINITY); // -Infinity
    // console.log(Number.POSITIVE_INFINITY); // Infinity


// Number Methods : 
    // console.log(Number.isFinite(10));           // true
    // console.log(Number.isInteger(10.5));       // false
    // console.log(Number.isNaN(NaN));           // true
    // console.log(Number.isNaN("nada123"));    //true
    // console.log(Number.parseFloat('10.5')); // 10.5
    // console.log(Number.parseFloat("adfadf"));   //NaN
    // console.log(Number.parseInt('10.5')); // 10


// Math Object : provides methods for several mathematical operations

// constants:
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045

// Rounding and truncation : 
console.log(Math.round(4.7)); // 5
console.log(Math.ceil(4.1)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.trunc(4.9)); // 4

// powers and roots:
console.log(Math.pow(2, 3)); // 8
console.log(Math.sqrt(16)); // 4
console.log(Math.cbrt(27)); // 3

// trigonometry:
console.log(Math.sin(Math.PI / 2)); // 1
console.log(Math.cos(0)); // 1
console.log(Math.tan(Math.PI / 4)); // 1
console.log(Math.asin(1)); // 1.5707963267948966 (π/2)
console.log(Math.atan2(1, 1)); // 0.7853981633974483 (π/4) -->Returns the angle in radians between the positive x-axis and the point (x, y).

// logarithms and exponentials : 
console.log(Math.log(Math.E)); // 1
console.log(Math.log10(100)); // 2
console.log(Math.log2(8)); // 3
console.log(Math.exp(1)); // 2.718281828459045  --> gives e^num


// RANDOM NUMBER : 
console.log(Math.random()); // Random number between 0 and 1

//RANDOM NUMBER IN A GIVEN RANGE : 
function getrandomNum(min,max){
    return Math.floor(Math.random()*(max-min+1)) + min;
}
console.log(getrandomNum(10,50));       //prints random no. between 10 and 50


// Absolute and sign :
console.log(Math.abs(-5)); // 5
console.log(Math.sign(-5)); // -1       //returns the sign of the given no.
console.log(Math.sign(0)); // 0
console.log(Math.sign(5)); // 1

// Type conversion : 
console.log(parseInt('42')); // 42      -->parses a string to return an integer
console.log(parseFloat('42.42')); // 42.42      -->parses a string to return a float 
console.log(Number('42')); // 42        -->converts a string to number
console.log((42).toString()); // '42'       ->converts a number to string






