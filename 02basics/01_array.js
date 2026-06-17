//**Array

const myArray = [0, 1, 5, 6, 8]
const myHeros =["Ironman", "Hulk"]


const myArr2= new Array(1,2,3)

//console.log(myArray[2])

//** */ Array Methods

// myArray.push(7)
// myArray.pop()
// console.log(myArray)

//myArray.unshift(9)
//myArray.shift()

// console.log(myArray.includes(8))
// console.log(myArray.indexOf(9))

// const newArr= myArray.join()

// console.log(newArr)
// console.log(myArray)

// **slice, splice

console.log("A", myArray)

const myn1 = myArray.slice(1,3)
console.log(myn1)
console.log("B" ,myArray)

const myn2 = myArray.splice(1,3)
console.log("C" ,myArray)
console.log(myn2)