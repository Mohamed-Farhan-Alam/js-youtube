let myArry = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
const myHeros = ['Khalid-bin-waleed', 'Ali-bin-abi-talib', 'Abu-bakr', 'Umar-bin-khattab']

const myArry2 = new Array(10, 20, 30, 50)
// console.log(myArry[5]);

// Array Methods

// myArry.push("king")

// myArry.pop()

// myArry.unshift("first")
// myArry.shift()

// console.log(myArry.includes(25));
// console.log(myArry.indexOf(5));


// const newArry = myArry.join() // Thiwill turn this array into a string
// console.log(newArry);
// console.log(typeof newArry);



// slice and splice


//  const myn1 = myArry.slice(1, 5) 
//  console.log("A ", myArry);
//  console.log(myn1);


//  const myn2 = myArry.splice(1, 5) 
//  console.log("B ", myArry);
//  console.log(myn2);

 const myHeros2 = ["Mehmet", "Osman", "Faisla", "Obeida"]

 //myHeros.push(myHeros2)
    //console.log(myHeros);  // here, one whole array is pushed into a new array as another element of the array.

// myAll_Heros = myHeros.concat(myHeros2)
// console.log(myAll_Heros); // here two arrays are concatenated into one array.
 
// // Alternative to concat is spread operator here just use 3 dots to concatenate 2 or more arrays.

// const myAll_Heros2 = [...myHeros, ...myHeros2]
// console.log(myAll_Heros2); // here two arrays are concatenated into one array.

// const crazy_Array = [1, 2, 3, [3, 5, 8], 12, 26, 10, [[[2, 3, 5], 5, 8], 12, 26, 10]]
//  const unCrazy_Array = crazy_Array.flat(Infinity)    // this will remove the nested arrays and make it a single array.
//  console.log(unCrazy_Array);


Array.isArray("Yemen") // this will check if the given value is an array or not.
console. log (Array.isArray("Yemen")); // this will check if The given value is an array or not.

  

// const crazy_Array = [1, 2, 3, [3, 5, 8], 12, 26, 10, [[[2, 3, 5], 5, 8], 12, 26, 10]]
//  const unCrazy_Array = crazy_Array.flat(Infinity)    // this will remove the nested arrays and make it a single array.
//  console.log(unCrazy_Array);



console.log(Array.from("Yemen")); // this will convert the string into an array of characters


console.log(Array.from({name: "Yemen", age: 22})); // this will convert the object into an array of key-value pairs This is interesting and for future
console.log(Array.from({length: 5})); // this will create an array of length 5 with undefined values
console.log(Array.from({length: 5}, (value, index) => index + 1)); // this will create an array of length 5 with values from 1 to 5
console.log(Array.from({length: 5}, (value, index) => index + 1)); // this will create an array of length 5 with values from 0 to 4
console.log(Array.from({length: 5}, (value, index) => index + 1).map((value) => value * 2)); // this will create an array of length 5 with values from 0 to 4 and then multiply each value by 2


let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400

console.log(Array.of(score1, score2, score3, score4)); // this will create an array of the given values





