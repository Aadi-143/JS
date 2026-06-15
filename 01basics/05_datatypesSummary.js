// # Primitive Data Types

// 7 types: String, Number, Boolean, Null, Undefined, BigInt, Symbol

const score= 100
const scoreValue=100.3
const isLoggedIn= false
const outsideTemp= null

let userEmail;

const id=Symbol("123")
const anotherID= Symbol("123")

//console.log(id==anotherID)

const bigNumber= 1355131651551565n/// bigInt

//# Reference Data types (Non Primitive Data Types)

// Array, Objects, Function

const heros=["Ironman", "Thor", "Hulk"]  //arrays

let myObj={   //object
    name:"Namit",
    age:22,
}

 const myFunction =function(){    //Function Declaration
      //console.log("Hello world")
 }

//console.log(typeof id)


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non Primitive)

let MyName="Namit"

let anotherName= MyName

console.log(anotherName)
anotherName="Namit Jaiswal"
console.log(anotherName)

let userOne= {
    email:" google.com",
    upi:"namit@",

}
let userTwo=userOne
userTwo.email="yahoo.com"
console.log(userOne.email)
console.log(userTwo.email)
