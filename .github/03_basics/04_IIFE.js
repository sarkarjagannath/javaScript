/*IIFE:Immediately invoked Function Expressions 
It's used to immeiately executing a function 
and resolve pollution from the global scope */

(function chai(count){
    console.log(`${count} chia please`);
}) (3);

(()=>{
    console.log(`This is a arrow function`);  
})();

((argument)=>{
    console.log(`hi ${argument}`);
}) ("Jagannath");
