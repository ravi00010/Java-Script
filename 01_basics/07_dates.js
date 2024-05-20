// Dates

let myDate = new Date()
console.log(myDate); // ex: 2023-03-01T12:03:00.900Z
console.log(myDate.toString()) // ex: wed mar 01 2023 
console.log(myDate.toLocaleString()); // 3/1/2023  12:04:46 PM
console.log(typeof myDate); // object

//let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate.toDateString); // Mon Jan 23 2023
//let myCreatedDate = new Date(2023,0,23,5,3)
console.log(myCreatedDate.toLocaleDateString()); // 1/23/2023, 5:03:00 AM
let myCreatedDate = new Date("2023-01-14")
console.log(myCreatedDate.toLocaleDateString()); // 1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now()
console.log(myTimeStamp); // 1677672589191
console.log(myCreatedDate.getTime()); // 1673658000
console.log(Math.floor(Date.now()/1000)); 

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()); // month
console.log(newDate.getDate());

//'${newDate.getDay()} and the time'

newDate.toLocaleDateString('default',{
    weekday: "long"
})