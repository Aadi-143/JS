const name="Namit"
const repoCount=50

//console.log(name+repoCount  + "value")

console.log(`My name is ${name} and my repo count is ${repoCount}`)
const gameName = new String("indoorTableTennis")
console.log(gameName[0])
//console.log(gameName.__proto__)

console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf("s"))

const newString= gameName.substring(2,7)
console.log(newString)

const anotherString= gameName.slice(-15,4)
console.log(anotherString)

const myString= "   Namit Jaiswal   "
console.log(myString)
console.log(myString.trim())

const url="https://www.google.com/Namit Jaiswal  "
console.log(url.replace("Namit Jaiswal ", "NamitJaiswal"))

console.log(url.includes("Namit"))

console.log(gameName.split("T"))
