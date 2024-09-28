
// Unlike C++, where you have both static (stack-allocated) and dynamic (heap-allocated) memory management, 
// JavaScript manages all objects on the heap.

const { log, timeStamp } = require("console");

// object literal : 

    // let user = {
    //     username : "Nihal",
    //     userage : 20,
    //     isIndian : true,

    //     printDetails : function(){
    //         console.log(this);
    //     }
    // }

    // console.log(user.printDetails())
    // console.log(this)

// constructor function : helps avoid repetition of defining an object again and again
    // function user(username, userage, isIndian){
    //     this.username = username;
    //     this.userage = userage;
    //     this.isIndian = true;

    //     this.greet = function(){
    //         if(isIndian===true) console.log(`hello ${this.username}, your age is ${userage}, you are indian`);
    //         else console.log(`hello ${this.username}, your age is ${userage}, you are not an indian`);
    //     }
    //     return this;
    // }

    // let user1 = user("nihal", 20 , true);
    // let user2 = user("ridhi",20, false);
    // console.log(user1);                     //overwrites the members of previously invoked function

// to avoid this we use new keyword
    // let user1 = new user("nihal", 20 , true);
    // let user2 = new user("ridhi",20, false);

    // console.log(user1);
    // console.log(user2);
    
    









// Class : the blueprint of creating object, which further supports the concept of inheritance, unlike that normal classless objects which just contains a bunch of key:value pair
    // class Cuboid{ 
    //     constructor(length,width,height){
    //         this.length = length ;
    //         this.width = width;
    //         this.height = height;
    //     }

    //     volume(){
    //         return this.length*this.width*this.height;
    //     }

    // }

    // const dibba = new Cuboid(5,3,2);          //dibba is an object of class cuboid
    // // const capacity = dibba.volume();
    // console.log(dibba.volume()); 
    // console.log(dibba.height);
    // console.log(dibba.width);
    // console.log(dibba.length);



// map class: 
    // const mymap = new Map;

    // mymap.set("name","nihal")
    // mymap.set('age', 20);

    // console.log(mymap.get("name"));
    // let myage = mymap.get('age');

    // console.log(myage);




// Inheritance :

    class user{
        constructor(name,email){
            this.name = name;
            this.email = email;
        }

        viewdata(){
            console.log("Data : ",data,   "name : ", this.name, " | email : ", this.email)
        }
    }
    let user1 = new user("nihal", "nihal123@gmail.com");
    user1.viewdata()

    
    class admin extends user{
        constructor(name, email, groupsize){
            super(name, email);
            this.groupsize = groupsize;
        }
        groupsizeInfo(){
            console.log(`Admin of the group of ${this.groupsize} members`);
            
        }
    }

    let admin1 = new admin("admin1", "admin1@gmail.com", 15);

    admin1.viewdata();
    admin1.groupsizeInfo()





