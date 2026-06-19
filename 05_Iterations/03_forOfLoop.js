// *******************For Of Loop*************

const arr=[1, 2, 3, 4, 5]

for (const val of arr) {
   // console.log(val);  
}

const greetings = "Hello World"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`);  
}

//**********************Maps********************
const map =new Map() // Its value is unique
map.set('IN', 'India')
map.set('USA', 'United State of Ameria')
map.set('FR', 'France')
map.set('IN', 'India')

//console.log(map);
 

for (const [key ,value] of map) {
    //console.log(key , ':-' , value);
    
}
//*************Objects are iteratble by For Of loops
// const myObj={
//     game1:"NFS",
//     Game2:"Spiderman"
// }
// for (const key of myObj) {
//     console.log(key);
    
// }


