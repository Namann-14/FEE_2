// variable redeclaration using var
var a = 10;
console.log(a); // Output: 10

var a = 20;
console.log(a); // Output: 20
// Redeclaring a variable with var is allowed.


// Example with let - variable redeclaration is not allowed
let b = 50;
console.log(b); // Output: 50

// The following line will cause an error because redeclaring 'b' with let is not allowed
// let b = 40; // Uncommenting this line will cause a SyntaxError

// Example with const - redeclaration and reassignment are not allowed
const X = 69;
console.log(X); // Output: 69


// 1. number 
let x = 10;
let y = -5;
let z = 2.5;
console.log(typeof(x))
console.log(typeof(y))
console.log(typeof(z))

// 2. string
let name = 'Naman';
console.log(typeof(name))

// 3. boolean
let bool = true;
console.log(typeof(bool));

// 4. undefined
let Y;
console.log(typeof(Y)); 

Y = 20;
console.log(Y); 
console.log(typeof(Y)); 

// 5. null 
let k = null;
console.log(typeof(k));





