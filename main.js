// JS DOM Manipulation
//A) Finding element
let x =document.getElementsByClassName("green")[0];

//B) check if it has certain class
// console.log(x.classList.contains('green')) //true
//console.log(x.classList.contains('yellow')) //false

//C) manipulate text
x.innerHTML="Hii0";

//D) manipulate style
x.style.color="white";

//remove class
x.classList.remove("blue");
//console.log(x.classList)

// JQuery DOM Manipulation
//A) Finding element
let y=$(".green").addClass("blue");

//B) check if it has certain class
// console.log($(".green").hasClass("blue")); //true
// console.log($(".green").hasClass("yellow")); //false

//C) manipulate text
y.html("Hii0");

//D) manipulate style and get style
console.log(y.css("background-color"));
y.css(color)="white";