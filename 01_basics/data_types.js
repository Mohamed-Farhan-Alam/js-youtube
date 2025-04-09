"use strict"; //treats all js codes as newer one

// alert(3 + 3) // we are using nodejs not browser

// redability is really important

/*
number = 2 ^ 53
bigint = for large numbers
string = "assembly of characters"
boolean = true or false
null = stand alone value (type = object)
undefined = kindda place holder for a value which is not defined yet (type = undefined)
symbol = uniquness


# "use strict";   treat all code as newer version of JS

avaScript is a dynamically typed language. Because data type will automatically 
assigned at the time of compilation or code execution


*/
/* 
 Types of data types, Namely 1) Primitive
                             2) Non Primitive data types (Rederence Type)
Types of primitive data types
String
Number
Boolean
Null
Undefined
Symbol
BigInt

Types of Non premitive/reference types

Array
Objects
Functions 
                            */

//Example of symbol data type. It is used to just create a unique ID or symbol for ex

let userId = Symbol("123")
let newUserID = Symbol("123")

console.log(userId === newUserID);


// Example of Arrays

let heros = ["Khalid", "Umar", "Ali"]

let newObj = {
    name : "Farhan",
    age : 22,
    place : "Duabi"
}


/* ********************************************Memory*****************************
 There are 2 types 1) Stack. 2) Heap.
Wherever we use primitive type of data types Stack type of memory is used.
wherever we use reference type of data types heap memory is used.
*/

let ytName = "FarhanCodes"
let YtAnotherName = ytName

YtAnotherName = "AlamCodes"

console.log(ytName);
console.log(YtAnotherName);

//above is the example of stack memeory types. Here every memory reference is allocated a stack and everytime it is changed 
//a duplicate is created in another stack.

let userOne = {
    name: "Farhan",
    email: "farhan@accenture.com"
}

let userTwo = userOne


userTwo.email = "farhan@google.com"

console.log(userOne);
console.log(userTwo);

/* Above is the example of Heap memory as here data is stored in a heap memory 
and evey reference is directed towards to that heap and collectively changed 
for evey reference */

