const userEmail = "Ravichoudhary@gmail.com"

if(userEmail){
    console.log("got the user email");
}else{
    console.log("Don't get user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

if(userEmail.length === 0){ // array can be checked like this
    console.log("array is empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??) : null undefined

let val1 , val2, val3 , val4;
val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 15
//val4 = null ? 10 ?? 20



console.log(val1); // 5
console.log(val2); // 10
console.log(val3); // 15
console.log(val4); // 10

// Terniary Operator

condition ? true : false

const iceTeaPrice =100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80")