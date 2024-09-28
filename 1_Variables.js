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



