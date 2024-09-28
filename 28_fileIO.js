

// fetching the data from some other file in the same directory, using Inbuilt js module called fs______________________________________________________________



// Synchronously : 

    // const otherfile = require('fs');               //The fs module is required to work with the file system in Node.js.

    // const data1 =otherfile.readFileSync('C:/Users/nihal/OneDrive/Desktop/WebDev_cohort/JSlearnings/randfile.txt','utf-8');
    // console.log(data1);

    // const data2 = otherfile.readFile('C:/Users/nihal/OneDrive/Desktop/WebDev_cohort/JSlearnings/randfile2.txt','utf-8')
    // console.log(data2);


// // Asynchronously :      
// // using readfile method : takes 3 arguments
//     function printData(err,data){       //err is addressed in case of exeptions, we can utilize it as well
//         if(err){
//             console.log("file not found!!!");
//             console.log("error :",err);
//         }
//         console.log("data :",data);                  
//     }

//     // here the print function get called asynchronously, after the file access is done
//     // printing data1
//         otherfile.readFile('C:/Users/nihal/onDrive/Desktop/WebDev_cohort/JSlearnings/randfile.txt','utf-8',printData)

//     // printing data2
//         otherfile.readFile("C:/Users/nihal/OneDrive/Desktop/WebDev_cohort/JSlearnings/randfile2.txt",'utf-8', printData);

//     console.log("this gets logged first!!! --> Asynchronous nature");



// ______________________________________________________

// let fs = require('fs');

// // // synchronous : 
//     fs.writeFileSync('./testFile.txt','this text is explicit!');        //creates a file and writes in it
//     // fs.writeFileSync('./testFile.txt', 'fuck you!!!');              //overwrites completely what's already written

//     let data = fs.readFileSync('./testFile.txt','utf-8');            //returns the data, which can be stored into a variable and printed lately
//     console.log(data);

// Asynchronous : 
    // fs.writeFile('./testFile.txt',"written asynchronously",(err) =>{})          //just takes a function as 3rd argument, which handles the retrieval of the data 

    // fs.readFile('./testFile.txt','utf-8',(err,data) =>{
    //     if(err){
    //         console.log("error");
    //     }
    //     else console.log("data",data);
        
    // })


// // Append operation : adds text instead of overwriting
//     fs.appendFileSync('./testFile.txt',`${new Date()}\n`);
//     fs.appendFileSync('./testFile.txt','append 1\n');
//     fs.appendFileSync('./testFile.txt','append 2\n');
//     fs.appendFileSync('./testFile.txt','append 3\n');
//     fs.appendFileSync('./testFile.txt','append 4\n');

//     let modifieddata = fs.readFileSync('./testFile.txt','utf-8');
//     console.log(modifieddata);
    
              
// // copying file : 
//     fs.cpSync('./testFile.txt','./testCopyFile.txt');
// // delete file : 
//     fs.unlinkSync('./testCopyFile.txt'); 

// // can also get access to  Stats of a file: 
//     let statData = fs.statSync('./testFile.txt');
//     console.log(statData);

// // Creating a folder
//     fs.mkdirSync('NewFolder')   

// // adding file to that folder : 
//     fs.writeFileSync('./NewFolder/newfile1.txt',"file created successfully")


// _____________________________________________________________________________________________



// Trimming out extra space from an external file : 

    // const fs = require('fs');

    // fs.readFile('./testFile.txt','utf-8',(err,data)=>{
    //     if(err) console.log("error retrieving data ",err);
    
    //     console.log(data);
    //     let trimmedData = data.trim();              //trims out extra spaces from the data
    //     fs.writeFile('./testFile.txt',trimmedData,()=>{})
    // })


// function to do the same : 

    // const fs = require('fs');

    // function trimData(){
    //     let data = fs.readFileSync('./testFile.txt','utf-8');
    //     data= data.trim();
    //     fs.writeFileSync('./testFile.txt',data);
    //     console.log(data);
    // }
    // trimData();



// Callback Approach :

    // const { log } = require('console');
    // const fs = require('fs');

    // function trimData(filepath,cbfunc){
    //     fs.readFile(filepath,'utf-8',(err,data)=>{
    //         if(err){
    //             console.log("Can't read Data! ",err);
    //             return;
    //         }
    //         data = data.trim();
    //         fs.writeFile(filepath,data,()=>{
    //             console.log(data);
    //             cbfunc();
    //         })
    //     })
    // }

    // function completionMessage(){
    //     console.log("the file trimmed successfully!");
        
    // }
    // trimData('./testFile.txt',completionMessage)




// PROMISIFIED Approach : 

// lets create a function that returns a promise, which gets resolved once the data is trimmed and written back to the original file successfully

    // const { log } = require('console');
    // let fs = require('fs');

    // function TrimDataPromisified(filepath){
    //     return new Promise((resolve)=>{
    //         fs.readFile(filepath,'utf-8',(err,data)=>{
    //             if(err){
    //                 console.log("error reading data");
    //                 return ;
    //             }
    //             data = data.trim();
    //             fs.writeFile(filepath,data,()=>{
    //                 console.log(data);
    //                 resolve();
    //             })
    //         })
    //     })
    // }

    // (async function donetrimming(){
    //     await TrimDataPromisified('./testFile.txt');
    //     console.log("data trimmed successfully");
        
    // })();


























