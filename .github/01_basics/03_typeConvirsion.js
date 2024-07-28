let ab="22a"   //"22ab" or "abnk"  they are type of NaN(not a number) but they didn't 
             //give any error in the process of convirsion

let number=Number(ab)

console.log(typeof(ab))
console.log(typeof(number)) // console.log(typeof number)
console.log(number)

let str=" "
let str2="hi"

let strbool=Boolean(str)
let strbool2=Boolean(str2)
console.table([typeof(str),typeof(str2)]);
console.table([strbool,strbool2])

/* 

in case of boolean empty string => false
""=>false
" "=>true
"abc"=>true


*/
const unique=Symbol('123');
const unique2=Symbol('123');

console.table([unique,unique2])  //although both are containing same value but their unique
console.log(unique === unique2) //here the example and '===' check the value and also check the data type of the variable


//Non primitive data type (object,array)
const course=["bca","mca","btech"];

const data={
    Name: "Jagannath Sarkar",
    Age: 22
}

const Myfun = function fun(){
    console.log("Hello World");
}