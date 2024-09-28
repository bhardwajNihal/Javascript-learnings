

//deep copying arrays and objects can be done using the spread operator ...;
//using this the new variable is created by copy by value rather than via reference which occurs by default
// let a = {
//     name: "nihal",
//     age: 20,
//     height:5.11,
// }

// let b = {...a};


// b.age = 19;

// console.log(b.age);
// console.log(a.age);



// primitives are passed by value (changes in the copy doesn't affect the original one)

    // let a = 5 ;
    // let b = a;

    // console.log("a =",a);
    // console.log("b =",b);

    // a = 8;
    // console.log("a =",a);
    // console.log("b =",b);

    // b = 9 ;
    // console.log("a =",a);
    // console.log("b =",b);


// non-primitives are passed by reference(changes in the copy alters the original one )

    // let arr = [1,2,3,4,5];
    // let brr = arr;

    // console.log(arr);
    // console.log(brr);

    // brr.pop();
    // brr.push(1,2)
    // console.log(arr);
    // console.log(brr);


// so to avoid this, copying should be done using the spread operator(...);

// let arr = [1,2,3,4];
//     let brr = [...arr];

//     console.log(arr);
//     console.log(brr);

//     brr.push(1,2)
//     console.log(arr);
//     console.log(brr);


// comparison : 

let a = 5;      
let b = 5;

console.log(a==b);      //true, as the value is being compared 

let arr = [1,2,3];
let brr = [1,2,3];
console.log(arr==brr);    // false, as the address is being compared

let crr = arr;
console.log(arr==crr);          //true, as both are referencing towards the same memory address

let obj1 = {
    0:`a`,
    1:`b`,
    2:`c`,
}

let obj2 = {
    0:`a`,
    1:`b`,
    2:`c`,
}

console.log(obj1==obj2);        // false again, as address in being compared