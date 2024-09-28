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
