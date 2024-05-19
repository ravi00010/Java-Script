// Primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const acoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId); // false

const bigNumber = 31235342466626629289n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "nagraj" ,"doga"];
let myObj={
    name:"ravi",
    age: 22 ,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof bigNumber); // undefined
console.log(typeof outsideTemp); // object
console.log(typeof myFunction); // function
console.log(typeof anotherId); // symbol