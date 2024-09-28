

// FILTER :
//  it returns a new array with elements that fulfils a specified criteria provided by the callback function 

// const array = [ 1,2,3,4,5,6,7,8,9,10];

// examples : with different syntax of the callback functions 

    // // 1.
    // let newarr1 = array.filter(function(ele){     //each time the elements of the given array is passed onto the function,and is returned if it fulfills the requirement
    //     return ele>5;
    // })
    // console.log(newarr1);

    // // 2.
    // let newarr2 = array.filter( (num) => {
    //     return num<5;
    // })
    // console.log(newarr2);

    // // 3.
    // let newarr3 = array.filter((num) => num%2==0);
    // console.log(newarr3);



// MAP : returns a new array with each element having a specified property provided by the callback function : 

    // const array = [1,2,3,4,5];

    // let newarray = array.map((value) => (value*10));
    // console.log(newarray); 




// REDUCE : 

let array = [1,2,3,4,5];

    // let sumOfelement = array.reduce((acc, currval) => {
        // console.log((`accumulator value : ${acc}, current value : ${currval}`));
    //     return acc + currval ;
    // },0);

// same as : 

let sumOfelement = array.reduce((acc,curval) => (acc+curval) , 0);


console.log(sumOfelement);

