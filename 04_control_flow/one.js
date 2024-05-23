// if 

if (condition){ // condition == true then execute

}

const isUserloggedIn = true

if(isUserloggedIn){

}

if( 2 == "2"){
    console.log("executed"); // executed
}

//<isUserloggedIn, >, <=, >=, ==, !=, ===

const temperature =41

if(temperature <50){
    console.log("less than 50");
}else{
    console.log("Temperature is greater than 50");
}


const score = 200

if(score >100){
    const power = "fly" // using var insted of const or let can access it outside the scope
    console.log(`user power: ${power}`);
}

const balance = 1000

if (balance>500) console.log("TEST"); // TEST

// nesting

if(balance<500){
    console.log("less than 500");
}else if(balance < 750){
    console.log("less than  750");
}else if(balance < 900){
    console.log("less than 750");
}else {
    console.log("less than 1200");
}


const userloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userloggedIn && debitCard){
    console.log("allow to buy courses");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged In");
}