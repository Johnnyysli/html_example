// locate an element
console.log(document.getElementById("app-title"));

// get element's attribute
console.log(document.getElementById("app-title").id);
console.log(document.getElementById("app-title").className);
console.log(document.getElementById("app-title").getAttribute("id"));

// update element's attribute
document.getElementById("app-title").little = "Shopping List";

// attribute name, value
appClass = document.getElementById("app-title").getAttribute("class");
appClass += "shopping";
// document.getElementById("app-title").setAttribute("class","shopping");

const h1 = document.getElementById("app-title");
console.log(h1.textContent);
h1.textContent = "hello";
h1.innerText = "hello again";
// h1.innerHTML = "<strong>Ski shop</strong>";
h1.innerHTML = "<p>Ski Shop</p>";


h1.style.color="blue";
h1.style.backgroundColor ="green";

h1.style.padding = "10px"
h1.style.borderRadius = "5px" ;

// use css selector
console.log(document.querySelectorAll("h1"));
console.log(document.querySelectorAll("app-title"));
console.log(document.querySelectorAll(".container"));
console.log(document.querySelector("input[type='text']"));
console.log(document.querySelector("li:nth-child(2)").innerText);
// console.log(document.querySelector("li:nth-child(2)").textContent);
const secondItem = document.querySelector("li:nth-child(2)");
secondItem.innerText = "Apple Juice";
secondItem.style.color = "red";

const list = document.querySelector("ul");
console.log(list);
const firstItem = list.querySelector("li");
firstItem.style.color ="blue";