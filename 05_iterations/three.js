// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

const greetings ="Hello World!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('FR', "France")

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value); // IN :- India
}

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
 }

//for (const [key, value] of myObject) {
//    console.log(key, ':-', value);  cant be iterated like this only map can iterate like this
// }

