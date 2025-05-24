// Singleton   here  The object is created using the Object.create() method
// let newObj2 = Object.create(newObj)


// object literal


const mySym = Symbol("Inchara")

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

//console.log(newObj.email);
//console.log(newObj["email"]);
//console.log(newObj[mySym]); 

newObj.lastLogin = ["2023-10-01", "2023-10-02", "2023-10-03", "2023-10-04"]
//console.log(newObj);
//Object.freeze(newObj) // this will make the object immutable and no changes can be made to it.
newObj.lastLogin = ["2024-10-01", "2024-10-02", "2024-10-03", "2024-10-04"]
//console.log(newObj);

newObj.greetings = function(){
    //console.log(`Hello ${this.name}, your email is ${this.email} and you are from ${this.place}`);

}

//console.log(newObj.greetings());



//**********************************************Singleton Object ********************************************************//

const tinderUser = new Object()
console.log(tinderUser);     
      