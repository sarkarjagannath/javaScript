const name="Jagannath"
const age="22"

// console.log(name +" "+age); it's old method didn't prefer to work with this features

console.log(`Name is: ${name} and age: ${age}`); //modern way to work with variables and string (string interpolation)

const gameName= new String("Jagannath")
// console.log(gameName)
// console.log(gameName[0])

const a=gameName.charAt(3)
const b=gameName.indexOf('a')
console.table([a,b])

const c="Jagannath-Sarkar-BCA"
console.log(c.replace('-','/'))
console.log(c.split('-'))
