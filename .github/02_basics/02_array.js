const arr1=["BCA","B.tech","M.tech"]
const arr2=["Jagannath","Oni","Ankan"]

// arr1.push(arr2)   
// console.log(arr1);
// console.log(arr1[3][0]);

const newArr=arr1.concat(arr2) //it return's a new array 
// const newArr=[...arr1,...arr2] same as concat it's called spread
// console.log(newArr);

console.log(Array.from("Jagannath"))

let a=200;
let b=300;
let c=400;

console.log(Array.of(a,b,c))
const arrb=Array.of("hi","bye")
const arra=new Array("hi","bye") 

/*
Array.of()
Purpose: Array.of() creates a new array with a variable number of arguments, regardless of the number or types of the arguments. Each argument becomes a separate element in the new array.


Array.from()
Purpose: Array.from() creates a new array instance from an array-like or iterable object. It takes an iterable (like a string, Set, or NodeList) or an array-like object

(such as an arguments object) as its first argument and converts it into an array.
*/
console.log(arrb)
console.log(arra)