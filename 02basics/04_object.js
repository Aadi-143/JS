const irctcUser= new Object() // **Object declaration using constructor method and it is also known as singlton object
// const irctcUser={}   => **Non Singleton Object

irctcUser.id ="132abc"
irctcUser.name="Namit"
irctcUser.isLoggedIn= false
//console.log(irctcUser)

// **Object Nesting
const regularUser={
    email: "namitjswl8001.in",
    fullName:{
        userFullName:{
            firstName:"Namit",
            lastName:"Jaiswal"
        }
    }
}
//console.log(regularUser.fullName)

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"a",
    4:"b"
}

//const obj3 ={obj1, obj2}
//const obj3=  Object.assign({}, obj1, obj2)
const obj3={...obj1,...obj2}// spread operator
//console.log(obj3)

const users=[
    {
        id:1,
        email:"abc@gmail.com"
    },
    {
        id:1,
        email:"abc@gmail.com"
    },
    {
        id:1,
        email:"abc@gmail.com"
    },
]

users[1].email
// console.log(irctcUser)

// console.log(Object.keys(irctcUser))
// console.log(Object.values(irctcUser))
// console.log(Object.entries(irctcUser))

// console.log(irctcUser.hasOwnProperty('isLoggedIn'))


// ** Object Destructure**
const course={
    courseName:"JavaScript",
    price:"999",
    courseInstructor:"Hitesh"
}

// course.courseInstructor
const {courseInstructor: instructor}= course
console.log(instructor)

