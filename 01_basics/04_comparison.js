// console.log(2 > 1); 
// console.log(2 >= 1);
// console.log(2<1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log("2" > 1); // true
console.log("02" > 1); // true

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >=0); // true comparison converts null to 0 thats why its syaing true


console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false

// === strict check

console.log("2" === 2) ; // cant be checked because two different datatypes
