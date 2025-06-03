// Singleton   here  The object is created using the Object.create() method
// let newObj2 = Object.create(newObj)


// object literal

const mySym = Symbol("mySymbol");

const newObj = {
    name: "Farhan",
    age: 22,
    [mySym]: "Inchara",
    place: "Duabi",
    email: "farhan@accenture.com",
    isLoggedIn: false,
    lastLogin: [
        "2023-10-01",
        "2023-10-02",
        "2023-10-03"
    ],
    
                                                
}

// console.log(newObj.email);
// console.log(newObj["email"]);
// console.log(newObj[mySym]); 

newObj.lastLogin = ["2023-10-01", "2023-10-02", "2023-10-03", "2023-10-04"]
//console.log(newObj);
//Object.freeze(newObj) // this will make the object immutable and no changes can be made to it.
newObj.lastLogin = ["2024-10-01", "2024-10-02", "2024-10-03", "2024-10-04"]
//console.log(newObj);

newObj.greetings = function(){
    //console.log(`Hello ${this.name}, your email is ${this.email} and you are from ${this.place}`);

}

// console.log(Object.keys(newObj)); // returns an array of keys
// console.log(Object.values(newObj)); // returns an array of values
// console.log(Object.entries(newObj)); // returns an array of key-value pairs
// console.log(Object.getOwnPropertyNames(newObj)); // returns an array of own property names
// console.log(Object.getOwnPropertySymbols(newObj)); // returns an array of own property symbols
// console.log(Object.getOwnPropertyDescriptor(newObj, "name")); // returns the property descriptor of the specified property
// console.log(Object.getOwnPropertyDescriptors(newObj)); // returns an object containing all own property descriptors
// console.log(Object.isFrozen(newObj)); // returns true if the object is frozen, false otherwise
// console.log(Object.isSealed(newObj)); // returns true if the object is sealed, false otherwise
// console.log(Object.isExtensible(newObj)); // returns true if the object is extensible, false otherwise

//console.log(newObj.greetings());

//console.log(newObj);




//**********************************************Singleton Object ********************************************************//

//const tinderUser = new Object()

const tinderUser = {}
 tinderUser.id = '123abcd'
 tinderUser.name = 'Farhan'
 tinderUser.isLoggedIn = true


//console.log(tinderUser);     

    
const regularUser = {
    email: "farhan@gmail.com",
    fullName:{
        userFullName:{
            firstName: "Farhan",
            lastName: "Khan"
        }
    }
} 
    
//console.log(regularUser.fullName.userFullName);


const obj1 = { 1: "a", 2: "b", 3: "c" };
const obj2 = { 4: "a", 5: "b", 6: "c" };
const obj3 = { 7: "a", 8: "b", 9: "c" };

const obj4 = { ...obj1, ...obj2, ...obj3 };
//console.log(obj4); // { 1: 'a', 2: 'b', 3: 'c', 4: 'a', 5: 'b', 6: 'c', 7: 'a, 8: 'b', 9: 'c' }
const obj5 = { ...obj1, ...obj2, ...obj3, 10: "d" };
const obj6 = Object.assign({}, obj1, obj2, obj3, { 10: "d" });
//console.log(obj5); // { 1: 'a', 2: 'b', 3: 'c', 4: 'a', 5: 'b', 6: 'c', 7: 'a', 8: 'b', 9: 'c', 10: 'd' }
//console.log(obj6); // { 1: 'a', 2: 'b', 3: 'c', 4: 'a', 5: 'b', 6: 'c', 7: 'a', 8: 'b', 9: 'c', 10: 'd' }

