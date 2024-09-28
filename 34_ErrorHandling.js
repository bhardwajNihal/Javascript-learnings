// Error handling in JavaScript is crucial for building reliable, user-friendly applications. 
// It ensures that your program can handle unexpected situations gracefully, 
// rather than crashing or displaying cryptic error messages.

const { error } = require("console");

// Syntax : 
    // try {
    //     // Code that may throw an error
    // } catch (error) {
    //     // Code to handle the error
    // } finally {
    //     // Code that always runs, even if an error occurred (optional)
    // }

// example : 
    // try {
    //     let result = undefinedFunction(); // This will throw a ReferenceError
    // } catch (error) {
        // console.log(error.name);    // Output: ReferenceError
        // console.log(error.message); // Output: undefinedFunction is not defined
        // console.log(error.stack);   // Detailed stack trace for debugging
    // }

    console.log("before");
    
try {
    console.log(a);
} catch (error) {
    console.log("error : ",error.message);
}

console.log("after");
