// JavaScript Event Loop:
// JavaScript is a single-threaded language, meaning it can only execute one task at a time.
// Manages the order of task execution.
// Prioritizes synchronous tasks.
// Handles asynchronous tasks using callbacks.
// Creates a non-blocking, responsive environment.


// WORKING OF JS EVENT LOOP : 
    // Event Queue: Stores events.
    // Event Loop: Checks queue, processes events.
    // Engine: Executes code.
    // Callback Queue: Stores asynchronous callbacks.
    // Repeat: Continuously checks and executes.


    

    function print(){
        console.log("hello");
    }

    setTimeout(() => {          //simply calls the function after 1sec
        print()
    }, 1000);

    console.log("hi")           //1st it gets printed 

    let i = 0;
    while(i<10000000000){               //vary heavy operation may take few seconds, after that only the function inside the setTimeout will
        i++;                            //get executed,even if 1s has passed, as the main thread is busy carrying out the heavy task
    }
    console.log(i);
