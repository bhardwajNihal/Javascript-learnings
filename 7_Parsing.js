
//  parsing typically involves converting strings into other data types, such as integers or floating-point numbers, that can be manipulated programmatically. This is crucial when dealing with user inputs or data from external sources, which are often in string format.


// Example of parsing integers using parseInt()

// Parse a string to an integer
let intFromString = parseInt('42');
console.log(intFromString); // Output: 42

// Parse a string with a decimal part (ignores the decimal part)
let intFromDecimalString = parseInt('42.7');
console.log(intFromDecimalString); // Output: 42

// Parse a binary string (base 2)
let binaryString = '101';
let intFromBinaryString = parseInt(binaryString, 2);
console.log(intFromBinaryString); // Output: 5

// Parse an invalid string
let invalidString = 'xyz';
let resultFromInvalidString = parseInt(invalidString);
console.log(resultFromInvalidString); // Output: NaN (Not-a-Number)


// Example of parsing floating-point numbers using parseFloat()

// Parse a string to a floating-point number
let floatFromString = parseFloat('42.7');
console.log(floatFromString); // Output: 42.7

// Parse an integer string (works the same way)
let floatFromIntString = parseFloat('42');
console.log(floatFromIntString); // Output: 42

// Parse a string with additional text (parses until the first non-numeric character)
let floatWithText = parseFloat('42.7abc');
console.log(floatWithText); // Output: 42.7

// Parse an invalid string
let invalidFloatString = 'abc42.7';
let resultFromInvalidFloatString = parseFloat(invalidFloatString);
console.log(resultFromInvalidFloatString); // Output: NaN (Not-a-Number)

// Handling user input parsing

let userInput = "100";
let numericValue = parseInt(userInput);
console.log(numericValue + 50); // Output: 150

// Parsing JSON data

let jsonData = '{"age": "30", "height": "170.5"}';
let parsedData = JSON.parse(jsonData);
let age = parseInt(parsedData.age);
let height = parseFloat(parsedData.height);
console.log(age, height); // Output: 30, 170.5


// Handling NaN results

let value = parseInt("abc");
if (isNaN(value)) {
    console.log("Parsing failed, not a number"); // Output: Parsing failed, not a number
}

// Specifying radix in parseInt() to avoid unexpected results

let octalString = '010';
let decimalInterpretation = parseInt(octalString, 10); // Specify radix 10 for decimal
console.log(decimalInterpretation); // Output: 10

// Without specifying radix, it might be interpreted as octal (base 8)
let defaultInterpretation = parseInt(octalString);
console.log(defaultInterpretation); // Output: 8 (octal interpretation)
