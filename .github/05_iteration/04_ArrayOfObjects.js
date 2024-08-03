const data=[
    {
        "id":"1",
        "name":"jagannath",
        "age":21
    },
    {
        "id":"2",
        "name":"Oni",
        "age":22
    },
    {
        "id":"3",
        "name":"Atanu",
        "age":21
    },
]
data.forEach ( (val)=>{
    console.log(val.name,val.age);
} )

data.forEach( (data)=>{
    console.log(`${data.id} : ${data.name} `)
})

// const a=data.forEach( (data)=>{
//     console.log(`${data.id} : ${data.name} `)  it's doesn't return anything
//     // return data.id;
// })

console.log(a);