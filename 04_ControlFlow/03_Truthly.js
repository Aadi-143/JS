const userEmail=[]

if (userEmail) {
    console.log("Got user Email");
}else{
    console.log("Dont have user email");   
}

// *******Falsy Values***********
// false, 0, -0, bigint 0n, "", null, undefined, Nan(not a number)

// ****************Truthy Values**************
// "0", "false", " ",  [], {}, function(){}=> Empty function

if (userEmail.length===0) {
    console.log("Array is empty"); 
}

const emptyObj={}
if (Object.keys(emptyObj).length===0) {
    console.log("Object is empty")
}

//**********************Nullish Coalesing Opearator (??)***********************: Null , Undefined

let val1;
// // val1=5 ?? 10
// val1= null ?? 10
// val1= undefined ?? 15
val1= null ?? 10 ?? 15
console.log(val1);

//*********************Terniary Operator*****************************
// condition ? true : false

const iceTeaPrice=100
iceTeaPrice<=80 ? console.log("less than 80") : console.log("More than 80");

