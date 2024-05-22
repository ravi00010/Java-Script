const user = {
    username : "ravi",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username},welcome to website`);
        console.log(this); // context change ravi to sam
    }

}

user.welcomeMessage() // ravi
user.username= "sam"
user.welcomeMessage() // sam

console.log(this); // cuurent context here is empty {}

function chai(){
    let username ="ravi"
    console.log(this.username); // undefined , cant use this keyword in function 
}

chai()

const chai = function(){
    let username = "ravi"
    console.log(this.username);// undefined
}

chai()

const chai =() => {
    let username = "ravi"
    console.log(this.username); // undefined
}

chai()

//const addTwo = (num1,num2) => { basic arrow function
  //  return num1+num2  
//}

//const addTwo = (num1,num2) =>num1+num2 // implicit arrow function

//const addTwo =(num1,num2) => (num1 + num2)

const addTwo = (num1,num2) => ({username : "ravi"}) //object return

console.log(addTwo(3,4));


//const myArray =[2,5,53,7,8]

//myArray.forEach(() =>)