let score = "33thirtyThree"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

console.log(valueInNumber);

/*
  In data conversions "33" will convert to 33 as a number
  "33abs" = NaN
  "string" = NaN (typeof NaN is also a number)
  true = 1; false = 0;
  */

let loggedIn = 0

let booleanInLoggedIn = Boolean(loggedIn)
console.log(booleanInLoggedIn);
console.log(typeof loggedIn);
console.log(typeof booleanInLoggedIn);

// any number 0 = false 1 = true
// string = true
// "" = false

let someNumber = 786

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber);

// here even number can also be converted to strings










