let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toISOString());
// console.log(myDate.toUTCString());
// console.log(myDate.toJSON());
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getMonth());
// console.log(myDate.getMonth() + 1); //Month is 0 indexed
// console.log(myDate.getDate());
// console.log(myDate.getDay());


// let myCreatedDate = new Date(2025, 00, 01, 13, 45, 60)
let myCreatedDate = new Date("01-27-2025")
//console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.toString());
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());
let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); //The Value of the date in milliseconds
// console.log(myCreatedDate.getTime() - myTimeStamp); //The difference between the two dates in milliseconds
// console.log(myCreatedDate.getTime() - myTimeStamp / (1000 * 60 * 60 * 24)); //The difference between the two dates in days
// console.log(myCreatedDate.getTime() - myTimeStamp / (1000 * 60 * 60 * 24 * 365)); //The difference between the two dates in years
//Most of these above values will be in decimal format and to fix that we can use Math.floor() or Math.ceil() or Math.round() to get the values in whole numbers
//console.log(Math.floor(myCreatedDate.getTime() - myTimeStamp / (1000 * 60 * 60 * 24))); //The difference between the two dates in days
//console.log(Math.ceil(Date.now()/1000));

// While writing text in website to mention date and time, String interpolation is used For Ex, `The time is ${myDate.toLocaleString()}`
// console.log(myDate.toLocaleString());

let newDate = new Date()
console.log(newDate);
console.log(newDate.toString());

newDate.toLocaleString("Default", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short"
})
console.log(newDate.toLocaleString("Default", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "shortGeneric"
}));
