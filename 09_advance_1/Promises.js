const promiseOne= new Promise( function (resolve, reject) {
    //Do an async task
    // DB calla, cryptography
    setTimeout(function () {
        console.log("Async task is complete");
        resolve()
    },1000)
})

promiseOne.then(function () {
    console.log("promise consumed");
    
})

new Promise(function (resolve,reject) {
    setTimeout(function () {
        console.log("Async task two");
        resolve()
    },1000)
}).then(function () {
    console.log("Async two resolved");
    
})

const promiseThree= new Promise(function(resolve, rject){
    setTimeout(function() {
      resolve({userName:"Namit", email:"namit8001@gmail.com", })  
    },1000)
})

promiseThree.then(function (user) {
    console.log(user);
    
})

promiseFour= new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({userName:"Namit", password:"12345"})
        }else{
            reject(`Error something went wrong`)
        }
    },2000)
})

promiseFour.then(function (user) {
    console.log(user);
    return user.userName
}).then((userName)=>{
    console.log(userName);
    
}).catch(function (err) {
    console.log(err);
    
}).finally(()=>{
    console.log("The Promise is either resolved or rejected");
    
})

const promiseFive= new Promise(function (resolve , reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({userName:"Javasript", password:"12345"})
        }else{
            reject(`Error: js  went wrong`)
        }
    },2000)
});

async function consumerPromiseFive() {
    try {
        const response= await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
        
    }
    
}
consumerPromiseFive()

// async function  getAllUsers() {
//     try {
//         const response= fetch('https://jsonplaceholder.typicode.com/posts')
        
        
//     const data= (await response).json()
//     console.log(data);
//     } catch (error) {
//         console.log("E:", error);
        
//     }
    
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/posts')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>console.log(error))

