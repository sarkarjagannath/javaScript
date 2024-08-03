const arr=[1,2,3,4,5,6,7,8,9,10]
// const newVal=arr.filter( (val) => (val>4))

// console.log(newVal);

const total=arr.reduce( (acc,curVal) => (acc+curVal),0)
console.log(total);