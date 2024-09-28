

// var is not block scoped 

// let and const are thus recommended to use always in modern js code in order to maintain predictibility




// variable declaration can be hoisted using var, but not let, and const 
    // name = "nihal"
    // var name;
    // console.log(name);

// but variable initialization can never be hoisted;


// TEMPORAL DEAD ZONE : 
    console.log(name );         //line 16 to 19 is the temporal dead zone
    console.log(2+2);
    console.log("harsh");
    let name = "nihal" 