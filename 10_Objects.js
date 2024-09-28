

//  object define : 

const { log } = require("console")

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


// Checksame v/s checksameitem
    // let product1 = {
    //     name : "jeans",
    //     type : "denim",
    //     brand : "deisel",
    // }

    // let product2 = {
    //     name : "jeans",
    //     type : "denim",
    //     brand : "deisel",
    // }


    // function checksame(obj1,obj2){
    //     if(obj1==obj2) console.log(`same`);
    //     else console.log(`different`);
    // }
    // checksame(product1,product2);           //different objects 

    // function checksameitem(a,b){
    //     if(a.name ==b.name) console.log(`same`);
    //     else console.log("diff");
    // }

    // checksameitem(product1,product2);        //diff objects but same item

//** OBJECTS ARE DYNAMIC IN NATURE i.e. ITS VALUE CAN BE CHANGED IN THE RUNTIME


// CLONING AN OBJECT : 

    let obj1 = {
        name : "nihal",
        age : 20,
        height : 180
    }

// 1. let obj2 = obj1     //obj2 also points to the same object obj1, no new obj created, any changes will reflect in both


// 2. Using the spread operator {...obj}

    let obj2 = {...obj1}


// 3. using the assign keyword : 

    let obj3 = Object.assign({}, obj1); 


// using iterative approch : not recommended


