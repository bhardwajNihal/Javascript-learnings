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

    // let afun = (name, age) => {
    //     console.log(`hello ${name}, you are ${age} years old`);
    // }

    // afun(`nihal`,20);