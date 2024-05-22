// Immediately Invoked Function Expressions
// to remove the pollution from global scope iife is used

(function chai (){
    // named IIFE
    console.log(`DB CONNECTED`);
})()

()(); // first paranthesis for defination and second for execution

( () => {
    console.log(`Db connected two ${name}`);
}) ('ravi'); 
