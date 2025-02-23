// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`Db CONNECTED`);
})();

( (name) =>  {
    console.log(`Db CONNECTED TWO ${name}`);
})("Yogesh")




