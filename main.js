//First part JS DOM Manipulation
//A) Finding element
let x = document.getElementsByClassName("green")[0];

//B) check if it has certain class
// console.log(x.classList.contains('green')) //true
//console.log(x.classList.contains('yellow')) //false

//C) manipulate text
//x.innerHTML="Hii0";

//D) manipulate style and get style
//x.style.color="white";
//console.log(x.style.color);

//E) remove class
//x.classList.remove("blue");
//F) add class
//x.classList.add("red");

// G) add attribute
x.setAttribute("gh", "fgg");
//H) remove attribute
x.removeAttribute("gh");
//I)Adding and Deleting Elements
let div = document.getElementById("container");
const node = document.createElement("p");
node.innerHTML = "p1";
div.appendChild(node);

// J) and get and change attr
//console.log(div.attributes); //get the whole attributes
//console.log(div.attributes.onClick); //get certain attribute
div.attributes.onClick.value = "print2(this)"; //change value of certain attr

// H)events
// H-1)Using add event listener
// div.addEventListener("click",function(e){
//     e.target.innerHTML="hii";
// })
// H-2)Using inline calling

// function print(e){
//     e.innerHTML="print2";
// }
// H-3)Using HTML DOM
// div.onclick = function (e) {
//   e.target.innerHTML = "hii";
// };
//Noeds:
/*
nextElementSibling
previousElementSibling
firstChild
lastChild
*/

// --------------------------------------------------------------

// Second part : JQuery DOM Manipulation

//A) Finding element
let y = $(".green");

//B) check if it has certain class
//console.log($(".green").hasClass("green")); //true
//console.log($(".green").hasClass("yellow")); //false

//C) manipulate text
y.html("Hii5");

//D) manipulate style and get style
//y.css({"color":"yellow"}); //set color
//y.css({"color":"black","background-color":"transparent"});

//E) remove class
// y.removeClass("green");
//F) add class
// y.addClass("blue");

// G) add attribute
// console.log(y.attr("class")) //get attribue value
y.attr("attr", "oe"); //set an attribute
//H) remove attribute
y.removeAttr("attr");

//I) Adding and Deleting Elements
// I-1)
let z = $("#container");
console.log(z);
$("<p>by JQ</p>").appendTo("#container");
// I-2)Using after and before
//https://api.jquery.com/after/

//I-3) using append
//$( ".inner" ).append( "<p>Test</p>" );

// Q) html(), text()
// .html() - This jQuery function gets/sets the HTML of any element.
// .text()- This jQuery function gets/sets the text (innertext) of any element.

//Noeds:
/*
siblings()/next()/nextAll()/prev()/
prevAll()/nextUntil()/parent()/parents()
/filter()
/first()
/last()/even()/odd()
*/
