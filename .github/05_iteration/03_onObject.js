const obj={
    "js":"Javascript",
    "cpp":"C ++",
    "py":"Python"
}
console.log(obj.js)

for (const key in obj) {           //for of loop doesn't work for object
    console.log(`${key} => ${obj[key]}`)  //"." operator doesn't work in this loop
} 

// for in works on key but for of works on value

const ab =['hi','bye','js']
for (const key in ab) {
    console.log(key);
}