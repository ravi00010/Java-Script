//let myName= "Ravi    "
//let myChannel = "Coder    "

//console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]

let heroPower ={
    thor : "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is  ${this.spiderman}`);

    }
}

Object.prototype.Ravi = function(){
    console.log(`Ravi is present in all objects`);
}

Array.prototype.heyRavi = function(){
    console.log(`Hitesh says hello`);
}

//heroPower.Ravi()

myHeros.Ravi()
myHeros.heyRavi() // Array have the power to access 
heroPower.heyRavi() // doesn't have the access of heyRavi

// inheritance

const User= {
    name : "chai",
    email : "chai@gmail.com"
}

const Teacher ={
    makevedio : true

}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssingment: 'Js Assingment',
    fullTime: true,
    __proto__ : TeachingSupport
}

Teacher : __proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName ="Ravi Kumar Choudhary      "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    //console.log(`${this.name}`);
    console.log(`True length is : ${this.trim().length}`);

}

anotherUserName.trueLength()
"Ravi".trueLength()
"Coder".trueLength()