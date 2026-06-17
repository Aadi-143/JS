//** Function Defination
function sayMyName(){
    console.log("N")
    console.log("a")
    console.log("m")
    console.log("i")
    console.log("t")
}

//**Function Execution
//sayMyName() 

// function addTwoNumber(number1, number2){    // ** number1, number 2 are parameters
//     console.log(number1+number2)
// }

function addTwoNumber(number1, number2){
    // let result= number1+number2
    // return result
    return number1+ number2
}
const result=  addTwoNumber(3, 5)  // 3, 5 are argument
//console.log("Result:", result)

function loginUserMessage(Username="sam"){
    if(Username===undefined){
      console.log("Please enter a username")
      return
    }
    return `${Username} just logged in`
}

// console.log(loginUserMessage("Namit"))
//console.log(loginUserMessage())


// *******Rest operator=> ... in function
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 600))

//** Passing object in Functions
const user={
    username:"Namit",
    age:19,
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and age is ${anyObject.age}`)
}
// handleObject(user)
handleObject({
    username:"sam",
    age:18
})

// **Passing arrays in function
const myArray= [100,200,400,600,]

function handleArrays(getArray){
    return getArray[2]
}
//console.log(handleArrays(myArray))
console.log(handleArrays([100,200,400,600,]))