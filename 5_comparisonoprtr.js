//simple comparisons
    // console.log(2<1);       //f t f t t
    // console.log(2>=1);
    // console.log(2==1);
    // console.log(2>1);
    // console.log(2!=1);

    // console.log("2">1);         //automatically converts to number and then compare
    // console.log("02">1);

//some comparisons to be avoided 

//null comparison
    // console.log(null>0);         //false
    // console.log(null>=0);       //comparison operator converts null to 0 , therefore -->true
    // console.log(null==0);       //false
    
//comparison of undefined 
    // console.log(undefined>0);           //comparision to undefined value always gives false
    // console.log(undefined==0);
    // console.log(undefined<0);
    

//Strict check (===) : check for even datatype

console.log("2"==2);        //true
console.log("2"===2);       //false
