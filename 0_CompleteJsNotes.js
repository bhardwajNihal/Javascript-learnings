// variables and constants :

    const accountId  = 12345;                //once declared can't be modified
    var name = "Rahul Dalal";               //discouraged to use the var keyword due to its scope issue 
    let email = "rahul123@gmail.com";       //Ideal way to declare variables
    city = "jaipur"                         //also a possibility, but avoid using
    let state;                              //if the value is not initialised then its termed as "undefined" by js
// output 
    console.log(name);
    console.log(email)

//some modification

// accountId = 54321;
// console.log(accountId)           //gives error

//rest all can be modified
name = "rahul kumar"
city = "delhi"
email = "rahul321@gmail.com"

//outputting all at once efficiently using tables

console.table([name, city, email, accountId])               

// ______________________________________________________________________________


//as new versions of js got introduced we use a keyword "use strict" to separate it from the older standard of code:

"use strict";

// alert("welcome to this webpage")            //shows on the browser, not nodejs


//Primitive datatypes:
    // number = 34;         ==> store no.s in the range upto 2^53
    // BigInt;              ==> use to store much much larger no. 
    // boolean              ==>true/false
    // string = "rahul"

    // null                 ==>standalone value , representation of an empty value
    // undefined            ==>assigned in case of uninitialized values

    // symbol  ==>used in case of unique values 

console.log(typeof "rahul")         //string
console.log(typeof 23)              //number
console.log(typeof 76.34)           //number
console.log(typeof null)            //object
console.log(typeof undefined)       //undefined


//Non Primitive datatypes : 

// Arrays , Objects , Functions 

// ______________________________________________________


// CONVERSIONS OF DATATYPES : 

// //datatype number
//     let score = 50;
//     console.log("datatype of score : ", typeof score);
//     console.log("value of score : ", score);

// //num value string to number datatype 
//     let score1 = "50";
//     console.log("datatype(before conversion) : ", typeof score1);
//     console.log("value(before conversion) :", score1);

//     let score1num = Number(score1);                 //string to number conversion                         
//     console.log("datatype(after conversion) : ", typeof score1num);
//     console.log("value(after conversion) : ", score1num);

// //mixed value string to number datatype
//     let score2 = "50abc";
//     console.log("datatype(before conversion): ", typeof score2);
//     console.log("value(before conversion) :", score2);

//     let score2num = Number(score2);
//     console.log("datatype(after conversion): ", typeof score2num);
//     console.log("value(after conversion) : ", score2num)

// //null to number 
//     let score3 = null;
//     console.log("datatype(before conversion): ", typeof score3);
//     console.log("value(before conversion) :", score3);

//     let score3num = Number(score3);
//     console.log("datatype(after conversion): ", typeof score3num);
//     console.log("value(after conversion) : ", score3num)

// //undefined to number
//     let score4 = undefined;
//     console.log("datatype(before conversion): ", typeof score4);
//     console.log("value(before conversion) :", score4);

//     let score4num = Number(score4);
//     console.log("datatype(after conversion): ", typeof score4num);
//     console.log("value(after conversion) : ", score4num)


//number to string
    // let number = 23;
    // console.log("datatype(before conversion) : ", typeof number);
    // console.log("value(before conversion) : ", number);

    // let stringnum = String(number);
    // console.log("datatype(after conversion)",typeof stringnum);
    // console.log("value(after conversion)", stringnum);


//boolean to number 

    // let bool1 = true;
    // let bool2 = false;
    // console.log("datatype before conversion: ", typeof bool1, "  ", typeof bool2);
    // console.log("value before conversion: ",bool1,"  ", bool2);

    // let num1 = Number(bool1);
    // let num2 = Number(bool2);
    // console.log("datatype after conversion: ", typeof num1, "  ", typeof num2);
    // console.log("value after conversion: ",num1,"  ", num2);


// string to boolean 

    // let str1 = "ram";
    // let str2 = "";
    // console.log("datatype(before conversion) : ", typeof str1);
    // console.log("value(before conversion) : ", str1);

    // let boolstr1 = Boolean(str1);
    // console.log("datatype(after conversion) : ", typeof boolstr1);
    // console.log("value(after conversion) : ", boolstr1);

    // let boolstr2 = Boolean(str2);
    // console.log("datatype(after conversion) : ", typeof boolstr2);
    // console.log("value(after conversion) : ", boolstr2);


//Some conclusions : 

//some values after conversion to number : 

// "33"        ==> 33;
// "33abc"     ==> NaN
// true        ==> 1
// false       ==>0

// "string value"  ==> true 
// " " : empty string ==> false

// _______________________________________________________________


//common operators :; + - * / % **

    // console.log(4+2);
    // console.log(4-2);
    // console.log(4*2);
    // console.log(4/2);
    // console.log(4%2);
    // console.log(4**2);

    // let value = 3;
    // let negvalue = -value;
    // console.log(negvalue);

//addition of strings results to concatenation:

    // let str1 = "Neel";
    // let str2 = "Nitin";
    // let str3 = " Mukesh";
    // console.log(str1+" "+str2+str3);


//string to number addition:

console.log(1+"2");         //12
console.log("1"+2);         //12
console.log("1"+"2");       //12
console.log("1"+2+2);       //122       if string appear before number all are simply concatenated
console.log(1+2+"2");       //32        if numbers appear before string , its operated 1st and then concatenated

//some non unacceptable operations :

// console.log(+true);          //1
// console.log(true+);       //error
// console.log(+"");            //0
// console.log(""+);         //error

// Pre and post increment operators : 

    // let gamecounter = 100;
    // console.log(gamecounter++);
    // console.log(gamecounter)
    // console.log(++gamecounter);



//simple comparisons
    // console.log(2<1);       //f t f t t
    // console.log(2>=1);
    // console.log(2==1);
    // console.log(2>1);
    // console.log(2!=1);

    // console.log("2">1);         //automatically converts to number and then compare
    // console.log("02">1);

//some comparisons to be avoided 

//null comparison
    // console.log(null>0);         //false
    // console.log(null>=0);       //comparison operator converts null to 0 , therefore -->true
    // console.log(null==0);       //false
    
//comparison of undefined 
    // console.log(undefined>0);           //comparision to undefined value always gives false
    // console.log(undefined==0);
    // console.log(undefined<0);
    

//Strict check (===) : check for even datatype

console.log("2"==2);        //true
console.log("2"===2);       //false


// ____________________________________________________________

// STRINGS and its inbuilt methonds : 

// // Creating Strings
// let singleQuoteString = 'Hello, world!'; // Using single quotes
// let doubleQuoteString = "Hello, world!"; // Using double quotes
// let templateLiteralString = `Hello, world!`; // Using backticks

// // String Properties
// let str = "Hello, world!";
// console.log(str.length); // Output: 13

// // String Methods

// // 1. charAt()
// console.log(str.charAt(0)); // Output: H

// // 2. charCodeAt()
// console.log(str.charCodeAt(0)); // Output: 72

// // 3. concat()
// let str1 = "Hello";
// let str2 = "world";
// console.log(str1.concat(", ", str2, "!")); // Output: Hello, world!

// // 4. includes()
// console.log(str.includes("world")); // Output: true

// // 5. endsWith()
// console.log(str.endsWith("!")); // Output: true

// // 6. indexOf()
// console.log(str.indexOf("world")); // Output: 7

// // 7. lastIndexOf()
// let repeatedStr = "Hello, world! Hello again!";
// console.log(repeatedStr.lastIndexOf("Hello")); // Output: 14

// // 8. match()
// let regex = /world/;
// console.log(str.match(regex)); // Output: ["world"]

// // 9. repeat()
// console.log(str.repeat(2)); // Output: Hello, world!Hello, world!

// // 10. replace()
// console.log(str.replace("world", "JavaScript")); // Output: Hello, JavaScript!

// // 11. search()
// console.log(str.search("world")); // Output: 7

// // 12. slice()
// console.log(str.slice(7, 12)); // Output: world

// // 13. split()
// console.log(str.split(", ")); // Output: ["Hello", "world!"]

// // 14. startsWith()
// console.log(str.startsWith("Hello")); // Output: true

// // 15. substring()
// console.log(str.substring(7, 12)); // Output: world

// // 16. toLowerCase()
// console.log(str.toLowerCase()); // Output: hello, world!

// // 17. toUpperCase()
// console.log(str.toUpperCase()); // Output: HELLO, WORLD!

// // 18. trim()
// let paddedStr = "   Hello, world!   ";
// console.log(paddedStr.trim()); // Output: Hello, world!

// // 19. trimStart()
// console.log(paddedStr.trimStart()); // Output: "Hello, world!   "

// // 20. trimEnd()
// console.log(paddedStr.trimEnd()); // Output: "   Hello, world!"

// // Template Literals
// let name = "John";
// let greeting = `Hello, ${name}!`;
// console.log(greeting); // Output: Hello, John!

// // Escape Characters
// let escapeExample = "Hello, \"world\"!\nNew line and\ttab.";
// console.log(escapeExample);
// /* Output:
// Hello, "world"!
// New line and   tab.
// */

// // String Immutability
// let originalStr = "Hello";
// let newStr = originalStr.concat(", world!");
// console.log(originalStr); // Output: Hello
// console.log(newStr);      // Output: Hello, world!



// practice

// let dal = 200;
// let roti = 10;
// let ice_cream = 30;

// console.log(`Your final bill amount is Rs ${100+ 2*10 + 30}`);


// let iphone15 = 79990;
// let earpods =  24990*2;

// let total_amount = iphone15 + earpods;

// let GST =(18*total_amount)/100;

// let gross_total = total_amount + GST;

// console.log(total_amount);
// console.log(GST);

// console.log(gross_total);



// let str1 = "neel";


// let str2 = 'nitin';

// let str3 = `mukesh`;

// console.log(str1+" "+str2+" "+str3);
// console.log(`${str1} ${str2} ${str3}`);


// let amount = 4000;

// let name = "nitin";

// console.log(`${name} has spent an amount of Rs ${amount}`);


// let item1 = 12000;

// let item2 = 2300;
 
// let item3 = 5500;

// let total_amount = item1+item2+item3;

// let gst = 18*total_amount/100;

// let coupon_discount = 15*total_amount/100;

// let Delivery = 50;

// let order_summary = `your items are : 
// Bag : Rs ${item1}
// Watch : Rs ${item2}
// Jeans : Rs ${item3}
// Total amount : Rs ${total_amount}
// GST :Rs ${gst} (18%)
// Coupon discount : Rs ${coupon_discount} (15%)
// Delivery charge : Rs ${Delivery}
// Net amount payable: Rs ${total_amount + gst - coupon_discount + Delivery} `

// console.log(order_summary);

// alert(order_summary);


// _____________________________________________________________

// NUMBERS AND MATHS : 

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
    // console.log(Number.isFinite(10)); // true
    // console.log(Number.isInteger(10.5)); // false
    // console.log(Number.isNaN(NaN)); // true
    // console.log(Number.isNaN("nada123"));
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


// _________________________________________________________________________

// PARSING : 


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


// ____________________________________________________________________________

// DATE AND TIME : 

// -----------------------------------------
// JavaScript Date and Time Handling Examples
// -----------------------------------------

// 1. Get the Current Date and Time
let nowdate = new Date();
console.log('Current Date and Time:', nowdate); 
// The above code creates a new Date object representing the current date and time.
// The output will look something like: "Tue Aug 13 2024 10:15:30 GMT+0000 (UTC)"

// 2. Create a Specific Date and Time
let specifiedDate = new Date('2024-05-18T14:30:00');
console.log('Specific Date:', specifiedDate); 
// This creates a Date object for a specific date and time provided as a string in ISO format.
// The output will be the date and time specified: "Sat May 18 2024 14:30:00 GMT+0000 (UTC)"

// 3. Create a Date Using Year, Month, Day, etc.
let ymdhmsDate = new Date(2024, 4, 18, 14, 30, 0, 0); 
console.log('Year, Month, Day, etc:', ymdhmsDate); 
// The Date constructor can also take individual components as parameters.
// Note: Months are 0-based, so 4 represents May.
// The output will be: "Sat May 18 2024 14:30:00 GMT+0000 (UTC)"

// 4. Extract Date and Time Components
let date = new Date();
console.log('Year:', date.getFullYear());          // Returns the full year (e.g., 2024)
console.log('Month:', date.getMonth());            // Returns the month (0-based, e.g., 4 for May)
console.log('Day of the Month:', date.getDate());  // Returns the day of the month (1-31)
console.log('Day of the Week:', date.getDay());    // Returns the day of the week (0-6, where 0 is Sunday)
console.log('Hours:', date.getHours());            // Returns the hour of the day (0-23)
console.log('Minutes:', date.getMinutes());        // Returns the minutes (0-59)
console.log('Seconds:', date.getSeconds());        // Returns the seconds (0-59)
console.log('Milliseconds:', date.getMilliseconds()); // Returns the milliseconds (0-999)
console.log('Milliseconds since Epoch:', date.getTime()); 
// getTime() returns the number of milliseconds since January 1, 1970 (Unix Epoch).

// 5. Set Date and Time Components
date.setFullYear(2025);
date.setMonth(11); // December (Months are 0-based)
date.setDate(25);
date.setHours(10);
date.setMinutes(30);
date.setSeconds(0);
date.setMilliseconds(0);
console.log('Updated Date:', date); 
// The date object now represents December 25, 2025, 10:30:00 AM.
// The output will be: "Thu Dec 25 2025 10:30:00 GMT+0000 (UTC)"

// 6. Formatting Dates
console.log('Date String:', date.toDateString());             // Outputs just the date part in a human-readable form.
console.log('Time String:', date.toTimeString());             // Outputs just the time part in a human-readable form.
console.log('Locale Date String:', date.toLocaleDateString()); // Outputs the date in a format specific to the locale (e.g., "12/25/2025" in the US).
console.log('Locale Time String:', date.toLocaleTimeString()); // Outputs the time in a format specific to the locale.
console.log('Locale String:', date.toLocaleString());          // Outputs both the date and time in a locale-specific format.
console.log('ISO String:', date.toISOString());                // Outputs the date and time in ISO format, useful for storage and communication.
console.log('UTC String:', date.toUTCString());                // Outputs the date and time in UTC format.

// 7. Date Arithmetic - Adding/Subtracting Time
let today = new Date();
let tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000)); 
console.log('Tomorrow:', tomorrow); 
// Adding 24 hours (in milliseconds) to the current time gives us the same time on the next day.

let nextWeek = new Date(today.getTime() + (7 * 24 * 60 * 60 * 1000)); 
console.log('Next Week:', nextWeek); 
// Adding 7 days worth of milliseconds gives us the same time on the same day next week.

// 8. Parsing Date Strings
let dateFromString = new Date('2024-05-18T14:30:00');
console.log('Parsed Date from String:', dateFromString); 
// Creates a date object from an ISO format string.

let dateFromLocaleString = new Date('May 18, 2024 14:30:00');
console.log('Parsed Date from Locale String:', dateFromLocaleString); 
// Parses a date from a string formatted in a more human-readable way.

// 9. Comparing Dates
let date1 = new Date('2024-05-18T14:30:00');
let date2 = new Date('2024-05-19T14:30:00');

console.log('Is date1 > date2?:', date1 > date2);  // false, because May 18 is earlier than May 19
console.log('Is date1 < date2?:', date1 < date2);  // true, because May 18 is earlier than May 19
console.log('Are date1 and date2 equal?:', date1.getTime() === date2.getTime()); 
// false, because the two dates represent different moments in time.

// 10. Simplified Examples
let now = new Date();
console.log('Current Date:', now.toLocaleString());
// Outputs the current date and time in a readable format according to the user's locale.

let specificDate = new Date('2024-05-18T14:30:00');
console.log('Specific Date:', specificDate.toLocaleString());
// Outputs the specific date and time you created in a readable format.

specificDate.setFullYear(2025);
console.log('Updated Year:', specificDate.toLocaleString());
// Outputs the date with the year updated to 2025.

let oneDayLater = new Date(specificDate.getTime() + 24 * 60 * 60 * 1000); 
console.log('One Day Later:', oneDayLater.toLocaleString());
// Adds one day to the updated date and outputs the result.

let comparison = specificDate > oneDayLater ? 'Specific Date is later' : 'One Day Later is later';
console.log(comparison); 
// Compares the two dates and outputs which one is later.



// ______________________________________________________________________________

// ARRAYS : 

// Creating Arrays

// Using array literals
let fruits = ['apple', 'banana', 'orange'];
console.log('Array:', fruits); // Outputs: ['apple', 'banana', 'orange']

// Using the Array constructor
let numbers = new Array(1, 2, 3, 4, 5);
console.log('Array:', numbers); // Outputs: [1, 2, 3, 4, 5]

// Accessing Array Elements

// Accessing elements by index
console.log('First element:', fruits[0]); // Outputs: 'apple'
console.log('Second element:', fruits[1]); // Outputs: 'banana'

// Modifying Array Elements

// Updating an element
fruits[1] = 'grape';
console.log('Updated Array:', fruits); // Outputs: ['apple', 'grape', 'orange']

// Adding elements to the end
fruits.push('kiwi');
console.log('Array after push:', fruits); // Outputs: ['apple', 'grape', 'orange', 'kiwi']

// Removing elements from the end
let removedElement = fruits.pop();
console.log('Array after pop:', fruits); // Outputs: ['apple', 'grape', 'orange']
console.log('Removed element:', removedElement); // Outputs: 'kiwi'

// Adding elements to the beginning
fruits.unshift('mango');
console.log('Array after unshift:', fruits); // Outputs: ['mango', 'apple', 'grape', 'orange']

// Removing elements from the beginning
let shiftedElement = fruits.shift();
console.log('Array after shift:', fruits); // Outputs: ['apple', 'grape', 'orange']
console.log('Shifted element:', shiftedElement); // Outputs: 'mango'

// Finding Elements in Arrays

// Finding the index of an element
let index = fruits.indexOf('grape');
console.log('Index of "grape":', index); // Outputs: 1

// Checking if an element exists
let exists = fruits.includes('banana');
console.log('Does "banana" exist?:', exists); // Outputs: false

// Slicing Arrays

// Extracting a portion of an array
let slicedArray = fruits.slice(1, 3);
console.log('Sliced Array:', slicedArray); // Outputs: ['grape', 'orange']

// Concatenating Arrays

// Concatenating arrays
let moreFruits = ['pineapple', 'melon'];
let combinedArray = fruits.concat(moreFruits);
console.log('Combined Array:', combinedArray); // Outputs: ['apple', 'grape', 'orange', 'pineapple', 'melon']

// Iterating Over Arrays

// Using for loop
console.log('Using for loop:');
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Using forEach method
console.log('Using forEach method:');
fruits.forEach(function(fruit) {
    console.log(fruit);
});

// Using map method
console.log('Using map method:');
let mappedArray = fruits.map(function(fruit) {
    return fruit.toUpperCase();
});
console.log(mappedArray);

// Filtering Arrays

// Using filter method
console.log('Using filter method:');
let filteredArray = fruits.filter(function(fruit) {
    return fruit.length >5;
});
console.log(filteredArray);

// coverting multidimensional array to simple array : 

let marray = [1,2,3,4,[4,5,6], 8, 9 ,[1,2,3,[4,5,6,[0,1,2]]]];
let simple_array = marray.flat(Infinity);       //needs to specify the extent of breaking the dimensions
console.log(simple_array);

// check for array:
console.log(Array.isArray("raman"));    //false
console.log(Array.isArray([1,2,3,4]));  //true

// converting string to array : 
console.log(Array.from("hitesh"));      //returns array 


// Sorting arrays   
    console.log('Sorted Array:', fruits.sort()); // Outputs: ['apple', 'grape', 'orange']


// _____________________________________________________________________________________

// OBJECTS : 



//  object define : 

    // let item = {
    //     name : `laptop`,
    //     brand : `asus`, 
    //     price : 40000,
    //     color : `black`,
    //     specs : {                                   // nested object 
    //         "RAM-capacity" : "8 gb",
    //         proccessor : "intel i3",
    //         "storage" : "512 gb",
    //     },

    //     ratings : function(){                                       // functions in object
    //         console.log("This product has a rating of 4.4 stars");
    //         console.log("No. of reviews : 5000");
    //     },
        
    // }

    // console.log(typeof item);

// Access : 

    // console.log(item);
    // console.log(item.name);

    // console.log(item["price"]);

    // console.log(item.specs["RAM-capacity"]);      //can't be accessed using the dot operator
    // console.log(item.specs.proccessor);
    // console.log(item.ratings());                // called in the manner " object.method()"


// Modify : 

    // item.price = 37000;

    // console.log(item.price);

// indirect access through another variable : 

    // let company = "brand";

    // console.log(item.company);          // undefined
    // console.log(item[company]);         //can only be accessed by enclsing the variable inside the bracket


// Deleting items : 
    // console.log(item);
    // delete item.price;
    // console.log(item);




// object De structuring : 
// Object destructuring is a feature in JavaScript that allows you to extract properties from an object and assign them to variables.
// This can make your code more concise and readable. Here's a detailed explanation with simple examples.

// Basic Syntax :
// When you destructure an object, you use curly braces {} on the left-hand side of an assignment to specify which properties 
// you want to extract.


// // Basic Destructuring

// // Define an object
//     const user = {
//         name: 'Alice',
//         age: 25,
//         email: 'alice@example.com'
//     };
  
//   // Without destructuring
//     const name1 = user.name;
//     const age1 = user.age;
//     const email1 = user.email;
    
//     console.log(name1); // Alice
//     console.log(age1); // 25
//     console.log(email1); // alice@example.com
  
//   // With destructuring
//     const { name, age, email } = user;
    
//     console.log(name); // Alice
//     console.log(age); // 25
//     console.log(email); // alice@example.com
  
//   // Destructuring with Default Values
  
//     const userWithNoEmail = {
//         name: 'Bob',
//         age: 30
//     };
  
//   // email will default to 'not provided' since it doesn't exist in the object
//     const { name: userName, age: userAge, email: userEmail = 'not provided' } = userWithNoEmail;
    
//     console.log(userName); // Bob
//     console.log(userAge); // 30
//     console.log(userEmail); // not provided
  
//   // Renaming Variables
  
//     const userRenaming = {
//         name: 'Charlie',
//         age: 35,
//         email: 'charlie@example.com'
//     };
  
//   // Renaming variables while destructuring
//     const { name: newName, age: newAge, email: newEmail } = userRenaming;
    
//     console.log(newName); // Charlie
//     console.log(newAge); // 35
//     console.log(newEmail); // charlie@example.com
  
//   // Nested Object Destructuring
    
//     const userWithAddress = {
//         name: 'Diana',
//         age: 28,
//         address: {
//         city: 'Wonderland',
//         zip: '12345'
//         }
//     };
    
//   // Destructuring nested object
//     const { name: userName2, address: { city, zip } } = userWithAddress;
    
//     console.log(userName2); // Diana
//     console.log(city); // Wonderland
//     console.log(zip); // 12345
  
//   // Destructuring Function Parameters
  
//   // Function that uses destructuring in parameters
//     function displayUser({ name, age, email }) {
//         console.log(`Name: ${name}`);               // Name: Eve
//         console.log(`Age: ${age}`);                 // Age: 32
//         console.log(`Email: ${email}`);             // Email: eve@example.com
//     }
    
//     const userForFunction = {
//         name: 'Eve',
//         age: 32,
//         email: 'eve@example.com'
//     };
  
//   // Passing object to the function
//     displayUser(userForFunction);
  

  
// exercise on object destructure : 
    // let obj = {
    //     message : "good job",
    //     status : "complete",
    // }

    // let {message : newmessage, status : newstatus} = obj;

    // console.log(newmessage);
    // console.log(newstatus);


    let product1 = {
        name : "jeans",
        type : "denim",
        brand : "deisel",
    }
    
    let product2 = {
        name : "jeans",
        type : "denim",
        brand : "deisel",
    }
    
    
    function checksame(obj1,obj2){
        if(obj1==obj2) console.log(`same`);
        else console.log(`different`);
    }
    
    function checksameitem(a,b){
        if(a.name ==b.name) console.log(`same`);
        else console.log("diff");
    }
    
    checksameitem(product1,product2);
    checksame(product1,product2);
    

// _____________________________________________________________________________

// TRUTHY FALSY : 



// falsy values = 0 false undefined null NaN document.all

//rest all the values are truthy, i.e. for which the conditionals executes the if true results 




// let a = [1,2,3,4,5,6];

// let b = [];

// for(let i=0;i<a.length;i++){
//     b.push(a[i]);
// }

// for(let i=0;i<b.length;i++){
//     console.log(b[i]);
// }

// b[1] = "radha";

// console.log(b[1]);
// console.log(a[1]);


// let a = [1,2,3,4,5,6];

// a.forEach(function(element){        //doesn't alter the original array as new memory location is created and each element of the array is temporarily stored in it and the reqrired calculations is performd
//     console.log(element*2);
// });


// _________________________________________________________________

//REFERENCE AND COPYING : 

//deep copying arrays and objects can be done using the spread operator ...;
//using this the new variable is created by copy by value rather than via reference which occurs by default
// let a = {
//     name: "nihal",
//     age: 20,
//     height:5.11,
// }

// let b = {...a};


// b.age = 19;

// console.log(b.age);
// console.log(a.age);



// primitives are passed by value (changes in the copy doesn't affect the original one)

    // let a = 5 ;
    // let b = a;

    // console.log("a =",a);
    // console.log("b =",b);

    // a = 8;
    // console.log("a =",a);
    // console.log("b =",b);

    // b = 9 ;
    // console.log("a =",a);
    // console.log("b =",b);


// non-primitives are passed by reference(changes in the copy alters the original one )

    // let arr = [1,2,3,4,5];
    // let brr = arr;

    // console.log(arr);
    // console.log(brr);

    // brr.pop();
    // brr.push(1,2)
    // console.log(arr);
    // console.log(brr);


// so to avoid this, copying should be done using the spread operator(...);

// let arr = [1,2,3,4];
//     let brr = [...arr];

//     console.log(arr);
//     console.log(brr);

//     brr.push(1,2)
//     console.log(arr);
//     console.log(brr);


// comparison : 

let a = 5;      
let b = 5;

console.log(a==b);      //true, as the value is being compared 

let arr = [1,2,3];
let brr = [1,2,3];
console.log(arr==brr);    // false, as the address is being compared

let crr = arr;
console.log(arr==crr);          //true, as both are referencing towards the same memory address

let obj1 = {
    0:`a`,
    1:`b`,
    2:`c`,
}

let obj2 = {
    0:`a`,
    1:`b`,
    2:`c`,
}

console.log(obj1==obj2);        // false again, as address in being compared


// ___________________________________________________________________________________

// JSON : 

// JSON : is a data format that has strings as the key value pair which is easy to be transported over the network;
// it can be easily converted in normal js object(a data structure) and vice-versa.

let obj = {
    name : "veer",
    title : "bahadur",
    age : 45,
    color : 'brown', 
    height : 5.9, 
}

console.log(obj);
console.log(typeof obj);

let strobj = JSON.stringify(obj);       //comverts the normal object in js to a stringified JSON version of the object for its easier transportation around the network and to the server, also in the api call 
    // O/P : {"name":"veer","title":"bahadur","age":45,"color":"brown","height":5.9}

console.log(strobj);
console.log(typeof strobj);         //type : string


let strToObj = JSON.parse(strobj);          //this method converts/parses a JSON string to a js object 
console.log(typeof strToObj);            //type : object again      
console.log(strToObj);
    
    
// _______________________________________________________________________

// FUNCTIONS : 

    // // declaration 
    // function greet(name){
    //     console.log(`hello Mr. ${name} how are you`);
    //     console.log("todays date : ", Date());
    // }
    // //function call
    // greet("Pumpkin Pie");


// function addtwonum(a,b){
//     return a+b;
// }

// let sum = addtwonum(5,4)
// console.log(sum);


// Taking multiple numbers as input and adding: 

    // function addAllnum(...nums){          //... : Spread operator helps take multiple inputs to perform operations5
    //     console.log(nums);          // binds all the input parameters in arrays
    //     let sumall = 0;
    //     for(let i =0; i<nums.length;i++){
    //         sumall += nums[i];              //exploits the arguments just as array to perform calculations
    //     }

    //     return sumall;
    // }

    // let sum = addAllnum(1,2,3,4,5);

    // console.log(sum);



// Objects as inputs : 

    // let item = {
    //     name : "laptop",
    //     brand : "asus",
    //     price : 40000
    // }

    // function displayitems(obj){
    //     console.log(obj.name);
    // }

    // displayitems(item);



// Passing array to function : 

// let myarray = [100,200,"numbers", 3000];

// function displayarrayitems(arr){
//    console.log( arr[0],
//     arr[1])
// }

// displayarrayitems(myarray);
 


// Nested Function : 

function outerFunction() {
    var outerVar = "I am outside";
    function innerFunction() {
        var innerVar = "I am inside";
        console.log(outerVar); // Output: "I am outside"
        console.log(innerVar); // Output: "I am inside"
    }
    innerFunction();
    console.log(innerVar); // Error: innerVar is not defined
}
outerFunction();


// _______________________________________________________________

// SCOPES IN JS :  

// Local Scope: Variables declared inside a function using var, let, or const are local to that function.
// Global Scope: Variables declared outside any function are in the global scope and can be accessed from anywhere in the program.
// Function Parameters: Parameters of a function are also scoped to that function.


// Function scope with var : 
    // function localScopeExample() {
    //     var localVar = "I am local";
    //     console.log(localVar); // Output: "I am local"
    // }
    // localScopeExample();
    // console.log(localVar); // Error: localVar is not defined


// Function scope with let and const : 

    // function localScopeWithLetAndConst() {
    //     let localLet = "I am a local let variable";
    //     const localConst = "I am a local const variable";
    //     console.log(localLet); // Output: "I am a local let variable"
    //     console.log(localConst); // Output: "I am a local const variable"
    // }
    // localScopeWithLetAndConst();
    // console.log(localLet); // Error: localLet is not defined
    // console.log(localConst); // Error: localConst is not defined



// Global scope : 

    // var globalVar = "I am global";
    // function globalScopeExample() {
    //     console.log(globalVar); // Output: "I am global"
    // }
    // globalScopeExample();
    // console.log(globalVar); // Output: "I am global"


// Functional parameters scope : 

    // function parameterScope(param) {
    //     console.log(param); // Output: value passed to the function
    // }
    // parameterScope("I am a parameter");
    // console.log(param); // Error: param is not defined


// Scopes in Nested function : in this case only the child functions can acces the variables of the parent function but not vice-versa
 
    // function outerFunction() {
    //     var outerVar = "I am outside";
    //     function innerFunction() {
    //         var innerVar = "I am inside";
    //         console.log(outerVar); // Output: "I am outside"
    //         console.log(innerVar); // Output: "I am inside"
    //     }
    //     innerFunction();
    //     console.log(innerVar); // Error: innerVar is not defined
    // }
    // outerFunction();


// we can access function even before its declaration, in a process called hoisting.

    // hello();

    // function hello(){
    //     console.log("hello world, learn code");
    // }

// But this can't be done in case we assign the function in some variable 

let afun = (name, age) => {
    console.log(`hello ${name}, you are ${age} years old`);
}

afun(`nihal`,20);

// ______________________________________________________________________________

// THIS AND ARROW FUNCTIONS : 

// this is a special keyword in JavaScript that refers to the object that is currently calling the function. 
// Its value can change depending on how and where the function is called.

// Object Method: If a regular function is called as a method of an object, this refers to that object.

    // let obj1 = {
    //     name : "raman",
    //     age : 20,

    //     greet : function(){
    //         console.log(`hello mr ${this.name}, your age is : ${this.age}`);
    //     }
    // };

    // obj1.greet();

    // obj1.name = "Mohan";
    // obj1.greet();
    // console.log(`hello mr ${this.name}, your age is : ${this.age}`);       //found no context here so gave undefined

    // console.log(`hello mr ${obj1.name}, your age is : ${obj1.age}`);




// Global Context: If a regular function is called in the global context, this refers to the global object (like window in browsers).
// window is an object provided by the browser that represents the entire browser window. It has properties and methods that you can use to interact with the browser.

// function regularFunction() {
//     console.log(this);
// }
// regularFunction();      // Logs the global object (window in browsers)


// this can change based on how you call the function:

// Global context: this is window.
// Object method: this is the object.
// Constructor function: this is the new object created.


// ARROW FUNCTION : a shorthand for the function definition 

// const addtwo = (num1,num2) => {
//     return num1 + num2 ; 
// }
    
    //same as

// cons/t addtwo = (num1, num2) => (num1+num2);


// Function to return object :

// function convertToObject(){
//     return{
        // name : "laptop",
        // price : 40000,
        // color : "black",
//     };
// }

// same as : 

// let convertToObject = () => ({name : "laptop", price : 40000, color : "black",});

// let obj1 = convertToObject();

// console.log(obj1);


// Different syntax for functions to be known : 
        
// let arr = [1,2,3,4,5];

//  arr.forEach(function(){})
// arr.forEach(() => {});       //here we need to return a value 
// arr.forEach(() => ());       //for direct operation, no need to return


// _________________________________________________________________________


// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

(function declare(){
    console.log("emergency declared");
})()


(()=>{})()   // --> executes the function as soon as it is declared

// --> to avoid disturbance from the variables declared in the global scope 

// ________________________________________________________________________________

// BASICS LOOPS
// CONDITIONALS 

// HIGHTER ORDER LOOPS : 


// FOR...OF LOOP : 
// The for...of loop is used to iterate over iterable objects such as arrays, 
// strings, maps, sets, and other types of collections. It iterates over the values of an iterable object.

    // // Example 1: Iterating Over an Array
    // const array = [1, 2, 3, 4, 5];

    // // Using for...of to iterate through array values
    // for (const value of array) {
    // console.log(value); // Output: 1, 2, 3, 4, 5
    // }

    // // Example 2: Iterating Over a String
    // const str = "hello";

    // // Using for...of to iterate through string characters
    // for (const char of str) {
    // console.log(char); // Output: h, e, l, l, o
    // }

    // // Example 3: Iterating Over a Map
    // const map = new Map([
    // ['key1', 'value1'],
    // ['key2', 'value2'],
    // ['key3', 'value3']
    // ]);

    // // Using for...of to iterate through map entries
    // for (const [key, value] of map) {
    // console.log(`${key}: ${value}`); // Output: key1: value1, key2: value2, key3: value3
    // }


// FOR...IN LOOP : 
// The for...in loop is used to iterate over the enumerable properties of an object. 
// It iterates over the keys (or property names) of an object.

    // // Example 1: Iterating Over an Object
    // const obj = {a: 1, b: 2, c: 3};

    // // Using for...in to iterate through object properties
    // for (const key in obj) {
    // console.log(`${key}: ${obj[key]}`); // Output: a: 1, b: 2, c: 3
    // }

    // // Example 2: Iterating Over an Array (Not Recommended)
    // const array = [1, 2, 3, 4, 5];

    // // Using for...in to iterate through array indices (keys)
    // for (const index in array) {
    // console.log(`${index}: ${array[index]}`); // Output: 0: 1, 1: 2, 2: 3, 3: 4, 4: 5
    // }


// Choosing between for...of and for...in depends on the type of collection you're working with and your specific needs:

// Use for...of for iterating over values of arrays, strings, and other iterables.
// Use for...in for iterating over the properties of objects.


// FOR...EACH LOOP :

// The forEach method is a built-in function for arrays that executes a provided function once for each array element. 
// It is often used for executing side effects for each array element, like logging or updating the DOM
// - Executes a provided function once for each array element.
// - Does not return a value (i.e., it returns undefined).
// Unlike for...of and for...in, forEach is specific to arrays and cannot be used with other iterable objects.

    // array.forEach(function(currentValue, index, array) {
    //     // code block to be executed
    // });


// Examples and Use Cases
// Example 1: Iterating Over an Array

    // const array = [1, 2, 3, 4, 5];

    // // Using forEach to iterate through array values
    // array.forEach(function(value) {
    // console.log(value); // Output: 1, 2, 3, 4, 5
    // });


// Example 2: Using the Index Parameter

    // const array = ['a', 'b', 'c', 'd', 'e'];

    // // Using forEach to iterate through array values with index
    // array.forEach(function(value, index) {
    // console.log(`Index: ${index}, Value: ${value}`); 
    // // Output:
    // // Index: 0, Value: a
    // // Index: 1, Value: b
    // // Index: 2, Value: c
    // // Index: 3, Value: d
    // // Index: 4, Value: e
    // });


// Example 3: Using the Array Parameter

    // const array = [10, 20, 30, 40, 50];

    // // Using forEach to iterate through array and log array length
    // array.forEach(function(value, index, array) {
    // console.log(`Value: ${value}, Array Length: ${array.length}`);
    // // Output:
    // // Value: 10, Array Length: 5
    // // Value: 20, Array Length: 5
    // // Value: 30, Array Length: 5
    // // Value: 40, Array Length: 5
    // // Value: 50, Array Length: 5
    // });


// ______________________________________________________________________

// MAP, FILTER AND REDUCE : 

// FILTER :
//  it returns a new array with elements that fulfils a specified criteria provided by the callback function 

// const array = [ 1,2,3,4,5,6,7,8,9,10];

// examples : with different syntax of the callback functions 

    // // 1.
    // let newarr1 = array.filter(function(ele){     //each time the elements of the given array is passed onto the function,and is returned if it fulfills the requirement
    //     return ele>5;
    // })
    // console.log(newarr1);

    // // 2.
    // let newarr2 = array.filter( (num) => {
    //     return num<5;
    // })
    // console.log(newarr2);

    // // 3.
    // let newarr3 = array.filter((num) => num%2==0);
    // console.log(newarr3);


// MAP : returns a new array with each element having a specified property provided by the callback function : 

    // const array = [1,2,3,4,5];

    // let newarray = array.map((value) => (value*10));
    // console.log(newarray); 


// REDUCE : 

let array = [1,2,3,4,5];

    // let sumOfelement = array.reduce((acc, currval) => {
        // console.log((`accumulator value : ${acc}, current value : ${currval}`));
    //     return acc + currval ;
    // },0);

// same as : 

// let sumOfelement = array.reduce((acc,curval) => (acc+curval) , 0);
// console.log(sumOfelement);


    














    
    
    
    
    
    
    
    
    


