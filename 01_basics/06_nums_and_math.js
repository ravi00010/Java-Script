const score = 400
console.log(score); //400

const balance = new Number(100)
console.log(balance); //Number:100

console.log(balance.toString().length); //3
console.log(balance.toFixed(2)); //100.00

const otherNumber =123.8966

console.log(otherNumber.toPrecision(3)); // 23.9 // 124

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000

// +++++++++++++++++++++ Maths +++++++++++++++++++++++++//

console.log(Math); // object with different properties // {}
console.log(Math.abs(-4)); // 4
console.log(Math.round(4.3)); // 4
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.min(4,3,6,8)); // 3
console.log(Math.max(4,9,8,7)); // 9

console.log(Math.random()); // everytime the value will come between 0 & 1
console.log((Math.random()*10) + 1); // shift the decimal

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1))+min); // first to shift the decimal then to take the floor value and to ge the number between min and max adding min to it 
