const marvel_heroes = ["thor", "IronMan", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

marvel_heroes.push(dc_heroes)

console.log(marvel_heroes); // arrays under array
console.log(marvel_heroes[3][1]); // flash

const allheroes = marvel_heroes.concat(dc_heroes)
console.log(allheroes); // a new array with both the elements in same array

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes); // same into another array

const another_array = [1,2,3, [4,5,6], 7, [6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array); // spread out all array into single one


console.log(Array.isArray("Ravi")); //false
console.log(Array.from("Ravi")); // convert to an array
console.log(Array.from({name: "Ravi"})); // interesting does not chances into an array

let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3)); // into an array [100,200,300]
