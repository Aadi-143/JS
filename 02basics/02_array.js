const marvel_heroes= ["Thor" , "Ironman", "Hulk"]
const dc= ["Superman", "Flash", "Batman"]

//marvel_heroes.push(dc)
// console.log(marvel_heroes)
// console.log(marvel_heroes[3][1])

// const allheroes= marvel_heroes.concat(dc)
// console.log(allheroes)

// const newheroes= [...marvel_heroes,...dc]
// //console.log(newheroes)

// const newarr=[1,2,3, [4,5,6], 7, [4,8, [4,5]]]
// const realArray= newarr.flat(Infinity)
// console.log(realArray)


console.log(Array.isArray("Namit"))
console.log(Array.from("Namit"))
console.log(Array.from({name:"Namit"})) // interesting

let score1 =100
let score2= 200
let score3=300

console.log(Array.of(score1, score2,score3))


