const user={
    username:"Hitesh",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username},  welcome to website`)  // => "THIS" refers current context
        console.log(this)
    }

}
// user.welcomeMessage()
// user. username="sam"
// user.welcomeMessage()
// console.log(this)4

// "THIS" cannot be used in function like in function name one

// function one() {
//     let username="Namit"
//     console.log(this.username)
// }

// one()

//++++++++++++++In expression++++++++++++

// const coffee= function(){
//     let username="Namit"
//     console.log(this.username)
// }
// coffee()

// ++++++++++++++++ ARROW FUNCTION++++++++++++++++++++++

const one= () => {
    let username="Namit"
    console.log(this)
}
//one()

// const addTwo =(num1, num2) =>{
//     return num1+num2
// }

//**************************IMPLICIT RETURN************
// const addTwo =(num1, num2) =>  num1+num2


// const addTwo =(num1, num2) =>  (num1+num2)


const addTwo =(num1, num2) =>  ({username:"Namit"})
console.log(addTwo(3,4))

