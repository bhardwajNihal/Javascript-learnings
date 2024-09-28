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





