
// JSON : is a data format that has strings as the key value pair which is easy to be transported over the network;
// it can be easily converted in normal js object(a data structure) and vice-versa.

let obj = {
    name : "veer",
    title : "bahadur",
    age : 45,
    color : 'brown', 
    height : 5.9, 
}

console.log(obj);
console.log(typeof obj);

let strobj = JSON.stringify(obj);       //comverts the normal object in js to a stringified JSON version of the object for its easier transportation around the network and to the server, also in the api call 
    // O/P : {"name":"veer","title":"bahadur","age":45,"color":"brown","height":5.9}

console.log(strobj);
console.log(typeof strobj);         //type : string


let strToObj = JSON.parse(strobj);          //JSON.parse() : this method converts/parses a JSON string to a js object 
console.log(typeof strToObj);            //type : object again      
console.log(strToObj);


