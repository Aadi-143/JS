// If Statement
const isUserLoggedIn=true
const temperature= 41

// if (temperature===40) {
//     console.log("less than 50");  
// }else{
// console.log("temperature is greater than 50");
// }

// const score=200
// if (score>100) {
//     const power ="fly"
//     console.log(`user Power: ${power}`);
    
// }
// // console.log(`user Power: ${power}`);

//const balance =1000
// if (balance>500) console.log("test");  This type of code is not suitable

// **************************Nesting IF Else**************************

// if (balance<500) {
//     console.log("less than 500");
// }else if (balance<750) {
//     console.log("Less than 750");
// }else if (balance<900) {
//     console.log("Less than 900");
// }else{
//     console.log("Less than 1200");   
// }

const userLoggedIn= true
const debitCard= true
const loggedInFromGoogle=false
const loggedInFromEmail=true

if (userLoggedIn && debitCard) {
    console.log("Allow to purchase course");
}
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");  
}