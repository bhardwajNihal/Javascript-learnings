

    // // declaration 
    // function greet(name){
    //     console.log(`hello Mr. ${name} how are you`);
    //     console.log("todays date : ", Date());
    // }
    // //function call
    // greet("Pumpkin Pie");


// function addtwonum(a,b){
//     return a+b;
// }

// let sum = addtwonum(5,4)
// console.log(sum);


// Taking multiple numbers as input and adding: 

    // function addAllnum(...nums){          //... : Spread operator helps take multiple inputs to perform operations5
    //     console.log(nums);          // binds all the input parameters in arrays
    //     let sumall = 0;
    //     for(let i =0; i<nums.length;i++){
    //         sumall += nums[i];              //exploits the arguments just as array to perform calculations
    //     }

    //     return sumall;
    // }

    // let sum = addAllnum(1,2,3,4,5);

    // console.log(sum);



// Objects as inputs : 

    // let item = {
    //     name : "laptop",
    //     brand : "asus",
    //     price : 40000
    // }

    // function displayitems(obj){
    //     console.log(obj.name);
    // }

    // displayitems(item);



// Passing array to function : 

// let myarray = [100,200,"numbers", 3000];

// function displayarrayitems(arr){
//    console.log( arr[0],
//     arr[1])
// }

// displayarrayitems(myarray);
 


// Nested Function : 

function outerFunction() {
    var outerVar = "I am outside";
    function innerFunction() {
        var innerVar = "I am inside";
        console.log(outerVar); // Output: "I am outside"
        console.log(innerVar); // Output: "I am inside"
    }
    innerFunction();
    console.log(innerVar); // Error: innerVar is not defined
}
outerFunction();





