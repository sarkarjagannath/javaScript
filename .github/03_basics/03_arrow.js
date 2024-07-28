const user={
    name:"Jagannath",
    course:"BCA",
    welcome: function(){
        console.log(`${this.name} , welcome!`)
    }
}

user.welcome()

//this in normal function
const chai=function(){
    console.log(this)
}

//this in arrow function

const chai2= () =>{
    console.log(this) //here it's return an emty object
}

console.log(this) //here it's return an emty object
chai()
chai2()

// const add = (...a) =>{
//     return a;
// }
const add = (...a) => (a)  //implicit return

const addobj = (...a) => ({username:"jagannath"})  //implicit return in case of object


console.log(add(3,3,1))


