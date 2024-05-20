// array

const myArr = [0,1,2,3,4,5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4,5)
console.log(myArr[0]);

// Array mathods

myArr.push(6)
console.log(myArr); // [0,1,2,3,4,5,6]
myArr.pop();
console.log(myArr); // [0,1,2,3,4,5]

myArr.unshift(9) // insertion to be at the first
myArr.shift() // [ 1,2,3,4,5 ]

console.log(myArr.includes(9)); // true/false
console.log(myArr.indexOf(9)); //-1

const newArr = newArr.join() // change in the type
console.log(typeof(newArr)); // string

// slice, splice

console.log("A", myArr); // A [0,1,2,3,4,5]

const myn1 = myArr.slice(1,3)
console.log(myn1); // [1,2]
console.log("B", myArr); // B [0,1,2,3,4,5] // does not manipulate original array

const myn2 = myArr.splice(1,3)
console.log("C", myArr); // [0, 4, 5] manipulate original array
console.log(myn2); // [1,2,3] 

