const number =[1,2,3]

//const initialValue=0
// const myTotal= number.reduce(function(acc ,curval){
//     console.log(`acc: ${acc} and curval ${curval}`);
    
//     return acc+curval
// },0)

const myTotal =number.reduce( (acc, curval)=> (acc+curval) ,0 )

//console.log(myTotal);

const shoppingCart=[
    {
        itemCart: "js course",
        price:999
    },
    {
        itemCart: "java course",
        price:1500
    },
    {
        itemCart: "c++ course",
        price:700
    },
    {
        itemCart: "python course",
        price:1000
    },
]

const totalCoursePrice= shoppingCart.reduce( (acc, item)=> (acc+item.price), 0 )
console.log(totalCoursePrice);
