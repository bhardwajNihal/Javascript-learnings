
// Windows is a universal object created by the browser, all other methods and global objects comes under it 
// When an HTML code is converted to a js object then its called a document  
// This whole process of manipulating a document under the browser window is called  document object model (DOM)



// Different types of selectors to access HTML elements :  

document.getElementById("idname");

// In case of multiple elements of same class or tag, an array like structure called HTML collections will be returned 
document.getElementsByClassName("classname");       
document.getElementsByTagName("tagname");


document.querySelector("#id/.class/tags");     //any type of elements can be selected, the very first element of respective classname or tag will get selected 
document.querySelectorAll("")       //in case of multiple selection, ; unlike previous methods, it returns a nodelist, which again is an array like structure 

// another useful method : if we select any particular element in of a webpage using the arrow tool in the browser window
// and type "$0" in the console then it will return its corresponding HTML element.



// HTMLCollection: Live collection of HTML elements. Automatically updates with document changes. Limited to elements. Cannot use for each loop to iterate over elements, have to use traditional for loop
// NodeList: Can be static or live. Contains any type of nodes. Easier iteration with forEach if static.
// node is the basic unit of the DOM (representing elements, text, comments, etc.) tree structure. The DOM represents an HTML or XML document as a tree of nodes.


// Live Collection: Automatically updates to reflect changes in the document (e.g., HTMLCollection).
// Static Collection: Does not update automatically when the document changes (e.g., NodeList from querySelectorAll).



// HTML code : 
   
    // <!-- <div class="testcases">
    //     <p id="fpara">hello, <br> <b>world!</b> <span id="hiddenpart" style="display: none;">Hidden text </span></p> -->
    // <!-- </div> -->


    // <div class="weekdays" style="font-size: 50px;" >
    //     <div class="day1">Monday</div>
    //     <div class="day2">tuesday</div>
    //     <div class="day4">thursday</div>
    // </div>





//Selectors to update existing element : 

// 1. innerHTML : Gets or sets the HTML inside an element.

// 2. outerHTML : Gets or sets the HTML of the element itself, including its content.

// 3. innerText : is used when we need the text content as it is visibly rendered to the user, 
//                respecting styles and collapsing whitespace

// 4. textContent : is used when we need the full text content of an element, 
//      including hidden text, and want to preserve the exact whitespace and line breaks from the HTML.




// ADDING  AN ELEMENT : 

// A. append child() : by default adds the element to the last 

    // //step1 : create element 
    // let para3 = document.createElement("h1");
    // // step2 : add content
    // para3.textContent = "this para is added exclusively";
    // // step3 : select parent 
    // let body = document.querySelector("body");
    // // step4 : appendchild
    // body.appendChild(para3);




// B. adding element to the desired position : 
// There are 4 respective positions to which the new element can be inserted
// i.e. afterbegin, afterend, beforebegin and beforeend  : respective to the parent div

    // 1. select element respective to which the new element is to be inserted : 
    let respectiveelement = document.querySelector(".day2");

    // 2. create new element :
    let newelement = document.createElement('div');

    // 3. add classname and content to the new element : 
    newelement.className = "day3";
    newelement.textContent = "wednesday";

    //add element to the desired position :

    respectiveelement.insertAdjacentElement("afterend",newelement);


    

// C. removing the desired element : 

    // 1. select the parent element whose child is to be removed 
    let parentelement = document.querySelector(".weekdays");
    // 2.select the child to be removed
    let khotaSikka = document.querySelector(".day4");
    // remove the desired element , using removeChild
    parentelement.removeChild(khotaSikka);






//D. PARENT CHILD RELATIONS : 


    // moving from parent to child

    let parent = document.querySelector(".weekdays");  

    console.log(parent);

    for (let i = 0; i < parent.children.length; i++) {
        console.log(parent.children[i]);;
    }
    for (let i = 0; i < parent.children.length; i++) {
        console.log(parent.children[i].innerHTML);; 
    }

    console.log(parent.firstElementChild)
    console.log(parent.lastElementChild)

    parent.firstElementChild.style.backgroundColor = "red";
    parent.children[2].style.backgroundColor = "green"


    // moving from child to parent : 

    let child1 = document.querySelector(".day2");
    console.log("Parent element : ",child1.parentElement);

    // moving from one child to their siblings
    console.log("next siblings : ",child1.nextElementSibling);

    console.log("previous sibling : ",child1.previousElementSibling)










