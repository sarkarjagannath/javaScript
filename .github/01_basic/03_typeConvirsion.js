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
