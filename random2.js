


// let button = document.querySelector("#clickme");

// button.addEventListener("dblclick",function(){
//     alert("the button has been clicked and nuclear bomb has been departed")
// })



// practice q4 ;
    let butt1 = document.querySelector("#butt1");
    let butt2 = document.querySelector(".butt2");

    butt1.style.backgroundColor = "red";
    butt2.style.backgroundColor = "blue";

    butt1.style.color = "#fff";
    butt2.style.color = "#fff";


// Q5:

    let butt3= document.querySelector("#butt3");
    let butt4= document.querySelector("#butt4");

    butt3.style.backgroundColor = "lightgreen"; 
    butt3.style.border = "none"; 
    butt3.style.borderRadius = 8 + "px"; 
    butt3.style.padding = 7 + "px";

    butt4.style.borderRadius = 8 + "px"; 
    butt4.style.padding = 7 + "px";

// q6:
    butt3.addEventListener("click",function(){
    alert("items added to the bag successfully")
    })


// q7:
alert("welcome")



// exercise : add items to bag (myntra)

    let bag = document.querySelector("#bag");
    let wishlist = document.querySelector("#wishlist");
    let saleitem = document.querySelector("#saleitem");

    let message = document.querySelector("#itemsadded");

    let bagcount = 0;


    bag.addEventListener("click",function(){
        bagcount++;
        message.innerHTML = `Your bag has ${bagcount} items`
    })

    wishlist.addEventListener("click",function(){
        if(bagcount == 0){
            alert("your bag is empty")
        }
        else bagcount--;
        message.innerHTML = `Your bag has ${bagcount} items`
    })

    saleitem.addEventListener("click",function(){
        bagcount +=2;
        message.innerHTML = `Your bag has ${bagcount} items`
    })
















