
// strings , strings methods , array, array methods , conditionals(if , else , else if), for loop , while loop , do while , for each , for of, objects, for in, functions, builtin math functions

    // console.log((Math.floor(10*Math.random()))-10 + (Math.floor(10*Math.random())));


//SetTimeout function : 

    // setTimeout(function(){
    //     console.log("3 sec baad ");
    // }, 3*1000);

    //reverse timer

    // for(let i=10; i>=1;i--){
    //     setTimeout(function(){
    //         console.log(i);
    //     },(11-i)*1000)
    // } 


//print random no.s at the interval of 1s, till 10s :

    // for(let i=1;i<=10;i++){
    // setTimeout(function(){
    //     console.log(Math.floor(10*(Math.random())));  
    //     }
    // ,i*500)}



// MAP : Mapping array to a function.

    // function twice(ele){
    //     return ele * 2;
    // }
    // function logten(ele){
    //     return Math.log10(ele);
    // }

    // let arr= [1,2,3,4,5];
    // let brr = arr.map(twice);
    // console.log(brr);

    // let crr = arr.map(logten);
    // console.log(crr);

//Arrow notation for the same : shorthand for mapping 

    // let arr = [1,2,3,4,5];

    // let brr = arr.map(ele =>ele*ele);        //equivalent to a function taking ele as argument and then returning its square
    // console.log(brr);

    // let crr = arr.map(x => x+10);
    // console.log(crr);


//Filter : 

    // function filteroutodd(ele){
    // if(ele%2==0) return true;
    // else return false;
    // }

    // let arr = [1,2,3,4,5,6,7,8,9];

    // let brr = arr.filter(filteroutodd);
    // console.log(brr);

//Shorthand representation for the same : 

    // let crr = arr.filter (ele => ele<=5);         //same as function to print only no.s less than =5
    // console.log(crr);

    // let drr = arr.filter (ele => ele<=5 && ele%2==0);      //print only even no.s less than 5  
    // console.log(drr);



// SORTING : 
    // let arr = [1,6,4,2,5,3];
    // console.log(arr);

    // let brr = arr.sort();       // incresing order by default 
    // console.log("sorted in increasing order : ",brr);

    // let crr = arr.sort(function(a,b){           //a way to sort in decresing order, passing a,b as parameter and then returning b-a
    //     return b-a;
    // });
    // console.log("sorted in decreasing order : ",crr);


//shorthand 

    // let drr = arr.sort((a,b) => b-a);
    // console.log(drr);



// builtin sort function in js gives wrong output for unlike array items (containing -ve values and +ve values both) 

let mixed = [ -1,2,-5,-7,5,7]

    // let sortedarr = mixed.sort();       //o/p : [ -1, -5, -7, 2, 5, 7 ] i.e wrong


// so to sort in the intended way we always use this method : 
    // console.log("original : ",mixed);
    // let incarr = mixed.sort((a,b) => a-b);           //increasing order 
    // console.log("increasing order : ",incarr);
    // console.log("original : ",mixed);               //original gets modified

//sorting according to only absolute value ignoring the sign:
    // let abssort = mixed.sort((a,b) => Math.abs(a) - Math.abs(b));
    // console.log(abssort);