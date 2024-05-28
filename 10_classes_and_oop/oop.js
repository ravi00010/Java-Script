const user = {
    username : "Ravi",
    loginCount : 8,
    signedIn : true,

    getUserDetails: function(){
        //console.log("Got user Details from database");
        //console.log(`username: ${this.username}`);// Ravi
        console.log(this); // all the objects got printed
    }

}


console.log(user.username); // Ravi
//console.log(user.getUserDetails); // Undefined
//console.log(this); // {} empty parenthesis



//const promiseOne = new Promise()
//const date = new Date()

function User(username, loginCount, isLoggedIN){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIN = isLoggedIN;

    this.greetings = function(){
        console.log(`WLecome ${this.username}`);

    }

    return this
}

const userOne = new User("Ravi",8,true);
const userTwo = new User("Ravi Choudhary",11,false);

//console.log(userOne);
//console.log(userTwo);
console.log(userOne.constructor); // function : user refeence of itself