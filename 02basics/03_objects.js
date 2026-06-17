// **singleton
// **Object.create (object declaration through constructor method)

// **object literals

const mySym= Symbol("keys1")

// **object declaration
const JsUser={
    name:"Namit",
    "Full Name":"Namit Jaiswal",
    [mySym]:"mykey1",  //using symbols in object
    age:18,
    location: "lucknow",
    email:"namitjswl@.com",
    isLoggedin:false,
    lastLoginDay: ["Monday","Saturday"]
}   
// console.log(JsUser.email) // First access method of object

// console.log(JsUser["email"])  // Second access method of object helps to access keys like "Full Name"
// console.log(JsUser["Full Name"])
// console.log( JsUser[mySym])

//**object value change
JsUser.email="namitjaiswal.in"

// **value locking in object
//Object.freeze(JsUser)
JsUser.email="namit2310.gmail.in"
//console.log(JsUser)


JsUser.greeting= function(){
    console.log("Hello Js user")
}
JsUser.greetingTwo= function(){
    console.log(`Hello Js user, ${this.name}`)
}


console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())