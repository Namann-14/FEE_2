// 1. simple function
function first(){
    console.log("This is a first function");
}

function second(call){
    console.log("This is a second function");
    call();
}

// 2. function callback 
// function calling 
second(first);

// 3. Synchronous 
console.log("started");
function myFunction(){
    console.log("My function");
}
myFunction();
console.log("end");

// 4. setTimeout: 
    // 1. callback function, 2. delay 
console.log("Image searching ");
    setTimeout(() => {
    console.log("Image rendered");
}, 2000);
console.log("Work done");

// 5. setInterval: 
let count = 0;
let a = setInterval(() => {
    count++;
    console.log(`Message ${count}: Ghar ke neeche aaja geedi chaliye`);
    if (count >= 3){
        clearInterval(a);
        console.log("Execution stopped");
    }
});
console.log("Work done");

