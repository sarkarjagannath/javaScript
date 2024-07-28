const arr=["jagannath",22,true,'M']
// console.log(arr[3])

//create array using new keyword
const arr2=new Array(1,3,"jagannath",'M')

// console.log(arr2)

//Array operations

// arr2.push("Sarkar")
// arr2.pop()  
// console.log(arr2.includes(3))
// console.log(arr2.indexOf(3))

//slice vs splice
const arr01=[0,1,2,3,4,5,6]
console.log(arr01.slice(0,3))
console.log("After slice", arr01);

console.log(arr01.splice(0,3))
console.log("After splice", arr01);  //splice manupulate the actual array
