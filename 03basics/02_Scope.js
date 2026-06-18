//var c= 300

let a=300 // ** Global Scope

// **{block Scope}
if (true) {          
    let a= 10
    const b= 20
    //console.log("Inner:", a)
}


// console.log(a)
// // console.log(b)
// // console.log(c)

// *****Nested Scope******
function one(){
    const username="Namit"

    function two(){
        const website="youtube"
        //console.log(username)
    }
    //console.log(website)

    two()
}

one()

if (true) {
    const username="Namit"
    if (username==="Namit") {
        const website= " youtube"
        //console.log(username+website)
    }
    //console.log(website)
}
//console.log(username)

// ++++++++++++++++++++++++++++++Interesting+++++++++++++++++

console.log(addOne(5))
function addOne(num) {
    return num+1
}



// ** They can we called as expression in java script

//addTwo(5)  => this will show error "Cannot access 'addTwo' before initialization"
const addTwo = function(num){
    return num+2
}

addTwo(5)
