const user = new Object()   //Singleton objects (here we can create only one instance of this object)
const user2={}              //Normal object

const fbUser={}
fbUser.id="fb001"
fbUser.email="rj@gmail.com"
fbUser.isLoogedin=false

const obj1={
    a:1,
    b:2
}
const obj2={
    c:3,
    d:4
}

//merge 2 object

const obj3=Object.assign({},obj1,obj2)  //obj 1 and 2 and merge into empty object then return it  
console.log(obj3)

const obj4={...obj1,...obj2}
console.log(obj4)

//when data are comming from database
//array of object format
const Users=[
    {
        id:1,
        email:"j@gmail.com"
    },
    {
        id:2,
        email:"s@gmail.com"
    },
    {
        id:3,
        email:"r@gmail.com"
    }
]

for(let i=0;i<3;i++){

    console.log(Users[i].email)
}

console.log(Object.keys(fbUser));
console.log(Object.values(fbUser));
console.log(Object.keys(fbUser).length);                
console.log(fbUser.hasOwnProperty("isLoogedin"));      



