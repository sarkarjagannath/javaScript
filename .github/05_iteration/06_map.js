// foreach doesn't return anything that's why we use filter and map alos perform some op on a value using map
const arr=[1,2,3,4,5,6,7,8,9,10]

const newArr=arr
             .map( (val)=>(val*10) )
             .map( (val)=>(val+1) )
             .filter( (val)=>(val>=40) )
console.log(newArr);