const User1={
    name:"Jagannath",
};
const User2={
    name:"Sarkar",
};

User1.greeting=function(){

    console.log(`hi ${this.name}`);
}
User2.greeting=function(){

    console.log(`hi ${this.name}`);
}

console.log(User2.greeting());
console.log(User2);