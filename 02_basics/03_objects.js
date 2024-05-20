// singleton
//Object.create

// objects literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Ravi",
    "full_name": "Ravi Choudhary",
    mySym : "mykey1",// for using in symbol [mySym]
    age : 21,
    loctaion: "Durgapur",
    email: "ravi@gmail.com",
    isLoggedIn: false,
    lastlonginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email); // ravi@gmail.com
console.log(JsUser["email"]); // ravi@gmail.com
console.log(JsUser.full_name); // Ravi Choudhary
console.log(JsUser.mySym); // mykey1
console.log(typeof(JsUser.mySym)); // string
console.log(JsUser[mySym]); // mykey1 symbol

JsUser.email = "hitesh@chatgpt.com"
Object.freeze(JsUser)
JsUser.email ="ravi@chatgpt.com"
console.log(JsUser.emial); // hitesh@chatgpt.com

console.log(JsUser);

JsUser.greeting= function(){
    console.log("Hello Js user");
}

JsUser.greetingTwo = function(){
    console.log('Hello Js user, ${this.name}');
}

console.log(JsUser.greeting); //undefined function(anonymous)
console.log(JsUser.greeting()); // Hello Js user 

console.log(js.greetingTwo()); // Hello Js user, Ravi

