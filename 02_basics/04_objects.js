//const tinderUser = new Object() // singelton object
const tinderUser={} // non singelton object

tinderUser.id ="123abc"
tinderUser.name = "Ravi"
tinderUser.isLoggedIn = false

console.log(tinderUser); // same empty object

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Ravi",
            lastname: "Choudhary"
        }
    }
}

console.log(regularUser.fullname); // all the objects stored

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = { obj1, obj2}
//const obj3 = Objects.assign({},obj1, obj2,obj4)

const obj3 = {...obj1, ...obj2} // using spread
console.log(obj3); // all the objects in one


const users = [
    {
        id: 1,
        email: "ravi@gmail.com"
    },
    {
        id: 1,
        email: "ravi@gmail.com"
    },
    {
        id: 1,
        email: "ravi@gmail.com"
    },
    {
        id: 1,
        email: "ravi@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // array datatype
console.log(Object.values(tinderUser)); // keeping the values in an array
console.log(Object.entries(tinderUser)); // keeping entries in an array means id = .... then name = ........

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true
