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