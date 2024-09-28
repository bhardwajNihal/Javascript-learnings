


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



    





