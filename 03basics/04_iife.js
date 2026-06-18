// Immediately Invoked Function Expressions(IIFE)

//**  Named iife
(function chai() {
    console.log("DB Connected")
})();
// ************To remove global scope pollution in a code we iife***

// ******Unnamed iife
((name)=>{
    console.log(`DB Connected ${name}`);
    
})("Namit")