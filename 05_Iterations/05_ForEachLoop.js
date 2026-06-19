const coding =["js", "java", "ruby", "python", "cpp"]

// coding.forEach( function (item){
//     console.log(item);
// })


// coding.forEach((val) => {
//     console.log(val);    
// } )

// function printMe(val){
//     console.log(val);
// }
// coding.forEach(printMe)

// coding.forEach( (item , index, arr)=> {
//     console.log(item, index, arr);
    
// } )

const myCoding =[ 
    {
        languageName:"JavaScript",
        languageFileName:"Js"
    },
    {
        languageName:"Java",
        languageFileName:"Java"
    },
    {
        languageName:"Python",
        languageFileName:"Py"
    },
]
myCoding.forEach( (val)=> {
    console.log(val.languageName);
    
} )