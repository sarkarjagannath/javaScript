// objects

//creating a symbol
const symbol1 = Symbol("key1")

//creating object in js
const User={            
    name:"Jagannath",
    age:22,
    course:"BCA",
    numbers:[9.2,9.1,8.08,8.27,9.33,9.14],
    islogged:true,
    [symbol1]:"mykey",
    hi: ()=>(`Hi User`),
}

//Accessing the objects values using '.' and [] 

/*
console.log(User.name)     //but we mostly use this way
console.log(User["name"])  //this is the prefered method to do so
console.log(User[symbol1])
*/

//change object values
User.name="jbiebes"
User["name"]="J_sarkar"

// Object.freeze(User)  //Now we don't make any change to in our object's element
console.log(User);
// User.balance=2000     //If balance already exist then it will update,otherwise
                      // a new field will be created and added to the object

User.greeting=function(){
    console.log("Hi guys");
}

User.greeting2=function(){
    console.log(`Hi ${this.name}`);
}

User.greeting3=function(){
    console.log(`Hi ${User.name}`);
}

console.log(User.hi())
User.greeting2()
// console.log(User.greeting());   
// console.log(User.greeting2());   
// console.log(User.greeting3());   


