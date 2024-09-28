
// CONVERSIONS OF DATATYPES : 

// //datatype number
//     let score = 50;
//     console.log("datatype of score : ", typeof score);
//     console.log("value of score : ", score);

// //num value string to number datatype 
//     let score1 = "50";
//     console.log("datatype(before conversion) : ", typeof score1);
//     console.log("value(before conversion) :", score1);

//     let score1num = Number(score1);                 //string to number conversion                         
//     console.log("datatype(after conversion) : ", typeof score1num);
//     console.log("value(after conversion) : ", score1num);

// //mixed value string to number datatype
//     let score2 = "50abc";
//     console.log("datatype(before conversion): ", typeof score2);
//     console.log("value(before conversion) :", score2);

//     let score2num = Number(score2);
//     console.log("datatype(after conversion): ", typeof score2num);
//     console.log("value(after conversion) : ", score2num)

// //null to number 
//     let score3 = null;
//     console.log("datatype(before conversion): ", typeof score3);
//     console.log("value(before conversion) :", score3);

//     let score3num = Number(score3);
//     console.log("datatype(after conversion): ", typeof score3num);
//     console.log("value(after conversion) : ", score3num)

// //undefined to number
//     let score4 = undefined;
//     console.log("datatype(before conversion): ", typeof score4);
//     console.log("value(before conversion) :", score4);

//     let score4num = Number(score4);
//     console.log("datatype(after conversion): ", typeof score4num);
//     console.log("value(after conversion) : ", score4num)


//number to string
    // let number = 23;
    // console.log("datatype(before conversion) : ", typeof number);
    // console.log("value(before conversion) : ", number);

    // let stringnum = String(number);
    // console.log("datatype(after conversion)",typeof stringnum);
    // console.log("value(after conversion)", stringnum);


//boolean to number 

    // let bool1 = true;
    // let bool2 = false;
    // console.log("datatype before conversion: ", typeof bool1, "  ", typeof bool2);
    // console.log("value before conversion: ",bool1,"  ", bool2);

    // let num1 = Number(bool1);
    // let num2 = Number(bool2);
    // console.log("datatype after conversion: ", typeof num1, "  ", typeof num2);
    // console.log("value after conversion: ",num1,"  ", num2);


// string to boolean 

    // let str1 = "ram";
    // let str2 = "";
    // console.log("datatype(before conversion) : ", typeof str1);
    // console.log("value(before conversion) : ", str1);

    // let boolstr1 = Boolean(str1);
    // console.log("datatype(after conversion) : ", typeof boolstr1);
    // console.log("value(after conversion) : ", boolstr1);

    // let boolstr2 = Boolean(str2);
    // console.log("datatype(after conversion) : ", typeof boolstr2);
    // console.log("value(after conversion) : ", boolstr2);


//Some conclusions : 

//some values after conversion to number : 

// "33"        ==> 33;
// "33abc"     ==> NaN
// true        ==> 1
// false       ==>0

// "string value"  ==> true 
// " " : empty string ==> false