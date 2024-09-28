
// CALLBACK FUNCTIONS :

const { resolveObjectURL } = require("buffer");
const { log } = require("console");
const { resourceLimits } = require("worker_threads");

    // way 1 to call a callback function 
    // function sum(a,b){          // func to add two no.s
    //     console.log(a+b);
    // }
    // sum(2,3);            //call
    
    // function sumcallback(a,b,sumfunc){               //function that takes a functional argument, often termed as Callback function in case of Asynchronous operations 
    //     sumfunc(a,b);
    // }
    // sumcallback(3,4,sum);       //call

    // sumcallback(2,3,function(a,b){          // way 2 : defining the whole function itself at the time of passing
    //     console.log(a+b);
    // });




// SET TIMEOUT FUNCTION: takes a callback funtion to execute it only after a specified time period

    // function print(){
    //     console.log("hello you are under timeout");
    // }
    // setTimeout(() => {
    //     print();
    // }, 2000);       //calls the function after 2sec



// SetInterval : repeatedly executes a function at a specified interval (every X milliseconds).
    // timer from 10 to 1 :  

        // let StartTime = 11;
        // let timeinterval = setInterval(() => {      //wrapped around a variable to facilitate clearInterval
        //     StartTime--;
        //     console.log(StartTime);
        //     if(StartTime == 1) clearInterval(timeinterval);
        // }, 1000);





// PROMISE : an object that represents the eventual completion(or even failure) of an Asynchronous operation and its resulting value
// provides more manageable way to to deal with code that executes asynchronously like  
// Has 3 states namely : resolve, reject and pending

// a basic example : 
    // let ans = new Promise((reject,resolve)=>{                //reject and resolve are two handlers
    //     let randnum = Math.floor(Math.random()*10);
    //     console.log(randnum);
    //     if(randnum<5) return reject();
    //     else return resolve();
    // })

    // ans.then(()=>{                       // if the promise is resolved, then executes the function inside it
    //     console.log("below 5");
    // }).catch(()=>{ 
    //     console.log("above 5");          // if rejected
    // })      



// a function that returns a promise : 
// example-1:
    // function settimeoutPromisified(time){
    //     return new Promise(resolve => setTimeout(resolve,time));
    //     // same as : 
    //         // return new Promise((resolve,reject) => setTimeout(()=>{
    //         //     return resolve();
    //         // },time));            //resolves the promise after the given time
    // }

    // function callback(){
    //     console.log("after 3secs!!!");
    // }
    // settimeoutPromisified(3000).then(callback);


// example-2;
    // function returnPromise(){
    //     return new Promise(function(resolve,reject){
    //         console.log(" message : "); 
    //         let rand = Math.random();
    //         if(rand<0.5){
    //             resolve("12345");          
    //         }
    //         else{
    //             reject("Error - 420!");
    //         }
    //     })
    // }

    // returnPromise().then((data)=>{                         //takes resolve as argument
    //     console.log(" here is the data : ",data);
    // }).catch((reject)=>{
    //     console.log("Can't Retreive Data!!!",reject);
        
    // })




    
    let ctr = 1;
    function callback(){
        console.clear();
        console.log(ctr);
        ctr++;
        let timeout = setTimeout(callback,1000);
        if(ctr == 10) clearTimeout(timeout);
    }

    callback()
