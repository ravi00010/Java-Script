const name = "ravi"
const repoCount = 50

//console.log(name + repoCount + "Value" ); // rvai50 Value

console.log('Hello my name is ${name} and my repo count is ${repoCount}');

const gameName = new String('ravii-hhhc-com')

console.log(gameName[0]);
console.log(gameName.__proto__); //{}

console.log(gameName.length); //9
console.log(gameName.toUpperCase()); //RAVIIHHHC
console.log(gameName.charAt(2)); //position at char 
console.log(gameName.indexOf('i')); //3

const newString = gameName.substring(0,4) // does not obey negative value
console.log(newString); // ravi 

const anotherString = gameName.slice(-8, 4)
console.log(anotherString) //vi

const newString1 = "    rvai    "
console.log(newString1); // ravi with the space   
console.log(newString1.trim()); // ravi without the space

const url = "https://ravi.com/ravi%20choudhary"

console.log(url.replace('%20', '-')); // replace the things

console.log(url.includes('rvai')); // true

console.log(gameName.split('-')); // ['ravii','hhhcc','com']

