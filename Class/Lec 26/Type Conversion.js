console.log(1 + 2); // Output: 3

// Concatenation happens because one of the operands is a string
console.log(1 + "2"); // Output: 12 
console.log(typeof (1 + "2")); // Output: string

// String is implicitly converted to a number before subtraction
console.log(10 - "2"); // Output: 8
console.log(typeof (10 - "2")); // Output: number

// Concatenation happens because "A" is a string
console.log(10 + "A"); // Output: 10A

// NaN (Not-a-Number) because "A" cannot be converted to a number
console.log(10 - "A"); // Output: NaN

// String concatenation for both "2" and "A"
console.log(10 + "2" + "A"); // Output: 102A

// NaN because "A" can't be subtracted from a number
console.log(10 + "2" - "A"); // Output: NaN

// String to number conversion
let a = "20";
console.log(typeof a); // Output: string

// Converting string to number using parseInt
let d = parseInt(a);
console.log(typeof d); // Output: number

// Converting string to number using Number constructor
let b = Number(a);
console.log(typeof b); // Output: number
