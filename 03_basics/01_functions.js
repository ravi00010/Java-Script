
function sayMyName() {
    console.log("R");
    console.log("A");
    console.log("V");
    console.log("I");
}

//sayMyName() 

//function addTwoNumbers(number1 ,number2){
//    console.log(number1 + number2);
//}

function addTwoNumbers(number1,number2){
    //let result =number1+number2
    //return result
    return number1 + number2
    console.log("Rvai");// not exicute because after result nothing will be printed
}

const result = addTwoNumbers(3,4) // 7

//console.log("Result: ",result); // undefined

function loginUserMessage(username="sam"){ // passed during passing parameter
    if(username === undefined){
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("ravi"));

console.log(loginUserMessage()); // undefined


function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(2)); 
console.log(calculateCartPrice(200,300,400)); // using rest operator (...) for all the items to pack in a bundle and print giving an array

const user = {
    username :"Ravi",
    price :199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and the price is ${anyObject.price}`);
}

//handleObject(user)
handleObject({
    username :"sam",
    price : 399
})

const myNewArray = [200,400,100,600]

function returnSecondvalue(getArray){
    return getArray[1]
}

//console.log(returnSecondvalue(myNewArray)); //400
console.log(returnSecondvalue([200,400,500,1000])); //400