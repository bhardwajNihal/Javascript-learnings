  
// CALLBACK HELL

const { log } = require("console");

   
// // a simple function to print a data after 2 secs
//     function getData(data){
//         setTimeout(() => {
//             console.log("Data ",data);
//         }, 2000);
//     }

// // all will be printed at the same time, coz timer start for all 3 at the same time 
//     getData(1);
//     getData(2);
//     getData(3);

// // But if we want to print data one after other with the gap of 2 seconds, 
// // we need some modifications in the function and the way it is called
//     function getData(data, getnextdata){
//         setTimeout(() => {
//             console.log("Data ",data);
//             if(getnextdata){
//                 getnextdata(data);
//             }
//         }, 2000);
//     }
//     // calling : 
//     // This is CALLBACK HELL and this structure is called pyramid of doom 

//     getData(1,()=>{             //as the function takes argument, so we can't just pass the 2nd function name directly, it needs to be passed in this formeat
//         getData(2,()=>{             //Readability is fucked up here
//             getData(3,()=>{         //A little better approach here is promise chain, and Async await is even better
//                 getData(4);
//             })
//         });
//     })

// ___________________________________________________________________________________________________________________________________

// // PROMISE CHAIN : 

//     function GetDataPromisified(data){              //returns a promise that prints data after 2 seconds
//         return new Promise((resolve,reject) => {
//             setTimeout(() => {
//                 console.log("data ", data);
//                 resolve();
                
//             }, 2000);
//         })
//     }
// // enhances readability to some extent
//         GetDataPromisified(1)
//         .then(() => {
//             GetDataPromisified(2);
//         })
//         .then(()=>{
//             GetDataPromisified(3);
//         })



// _____________________________________________________________________________________________________________________________________

// // ASYNC AWAIT : gives the best readability, for handling asynchronous code

//     function GiveData(data){
//         return new Promise((resolve,reject) => {
//             setTimeout(() => {
//                 console.log("Data ", data);
//                 resolve();
//             }, 2000);
//         })
//     }
        
//     (async function asyncCall(){        //await calls need to wrapped into a async function necessarily    
//         await GiveData(1);
//         await GiveData(2);
//         await GiveData(3);
//         await GiveData(4);
//         await GiveData(5);
//     })();    //IIFE to imediately invoke the Async function on declared

          
// _____________________________________________________________________________________________________________________________________

    // // Promise States:
    //     // Pending: Initial state, neither fulfilled nor rejected.
    //     // Fulfilled: Operation completed successfully (resolve was called).
    //     // Rejected: Operation failed (reject was called).

    // // resolve and reject:
    //     // These are functions provided by the JavaScript engine when you create a Promise.
    //     // Calling resolve fulfills the Promise.
    //     // Calling reject rejects the Promise.

            
    // function random(chaddi,buddi){         //When the random function is called by a Promise, chaddi represents the resolve function, and buddi represents the reject function.
    // console.log("fuddu");
    // buddi();                                //function used to reject the Promise.
    // }

    // let p = new Promise(random);
    //     // same as 
    //     // let p = new Promise((chaddi,buddi) => {
    //     //     console.log("fuddu");
    //     //     buddi();
    //     // })

    // console.log(p);

    // p.then(()=>{
    //     console.log("promise fulfilled!");
    // }).catch(()=>{
    //     console.log("promise fucked!");
        
    // })
 
 

// _______________________________________________________________________________________________________________________________________

// function that returns a promise, which calls a settimeout function in it which resolves the promise in the given time 
function setTimeoutPromisified(timeInMs){
    return new Promise((resolve) => setTimeout(resolve,timeInMs));
}

//PROMISE CHAIN

    // setTimeoutPromisified(1000)         //called the function that returns a promise that gets resolved after the specified time
    // .then(()=>{
    //     console.log("1 sec has passed!");   //once resolved, it logs a message and again calling the same function
    //     setTimeoutPromisified(2000)
    //     .then(()=>{
    //         console.log("3 sec has passed!");       
    //         setTimeoutPromisified(2000)
    //         .then(()=>{
    //             console.log("5 sec has passed!");
    //         })
            
    //     })
    // })

// Async Await : 

// (async function call(){
//     await setTimeoutPromisified(1000);
//     console.log("HI !");
//     await setTimeoutPromisified(2000);
//     console.log("Hello!");
//     await setTimeoutPromisified(2000);
//     console.log("hello there!");
//     await setTimeoutPromisified(2000);
//     console.log("How are you!");
// })();        //IIFE

// _____________________________________________________________________________________________________________________________





 
 
 
 
 
