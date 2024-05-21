//var c = 300 // global scope
let a =300
if(true){
    let a = 10 // block scope
    const b = 20
    //var c = 30
}

for(let i=0;i<Array.length;i++){
    const element = Array[i];
}


//console.log(a); can't print outside the scope
//console.log(b); same
console.log(c); //30

//nested scope

function one(){
    const username = "ravi"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    console.log(website); //error outside the scope cant be executed

    two()
}

one()

if(true){
    const username = "ravi"
    if(username == "ravi"){
        const website = "youtube"
        console.log(username + website);
    }
    console.log(website); // cant be access outside the scope
}

console.log(username);


//+++++++++++++++++++++ interesting +++++++++++++++++

console.log(addone(5)); //6

function addone(num){
    return num+1
}

//addone(5)

addTwo(5) // cant use before declaration
const addTwo = function(num){
    return num+2
}

//addTwo(5)

