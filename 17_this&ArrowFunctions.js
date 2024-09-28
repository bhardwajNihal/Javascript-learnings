
// this is a special keyword in JavaScript that refers to the object that is currently calling the function. 
// Its value can change depending on how and where the function is called.

// Object Method: If a regular function is called as a method of an object, this refers to that object.

    let obj1 = {
        name : "raman",
        age : 20,

        greet : function(){
            console.log(`hello mr ${this.name}, your age is : ${this.age}`);
        }
    };

    obj1.greet();

    obj1.name = "Mohan";
    obj1.greet();
    console.log(`hello mr ${this.name}, your age is : ${this.age}`);       //found no context here so gave undefined

    console.log(`hello mr ${obj1.name}, your age is : ${obj1.age}`);




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








