// 1. Id selector: getElementById
let a = document.getElementById('heading');
a.style.color = "blue";
a.style.border = "2px solid black";
a.style.backgroundColor = "yellow";
a.style.padding = "20px "
a.style.textAlign = "center";

// 2. Class selector: getElementsByClassName
let items = document.getElementsByClassName('items');
items[0].style.backgroundColor = 'green';
items[2].style.backgroundColor = 'green';

// 3. Tagname selector: getElementsByTagName 
let heading2 = document.getElementsByTagName("h2");
heading2[0].style.backgroundColor = "green";
heading2[0].style.textDecoration = "line-through";

// 4. Queryselector: 

