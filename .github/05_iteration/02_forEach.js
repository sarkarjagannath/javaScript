//for each used only for array

const ab =['hi','bye','js']

ab.forEach(function (val) {
    console.log(val);
})

console.log(`===`);

ab.forEach( (val)=> ( console.log(val) ) )

console.log(`===`);

ab.forEach( (val,key,arr)=>{
    console.log(val,key,arr);
})


// foreach doesn't return anything 
