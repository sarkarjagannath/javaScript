const name="Jagannath Sarkar"
const array=[1,3,4,5,42]

for (const ch of name) {
    // console.log(`${ch}`);
    // process.stdout.write(`${ch}`); //print without nextline

}
for (const ch in name) {
    console.log(`${ch} : ${name[ch]}`);  //print the index values

}

//creating map in js
const map = new Map()
map.set("name","js")
map.set("city","badkulla")


for (const [key,values] of map) {
    console.log(key+" : "+values);
    
}

for (const key in map) {
    console.log(key)  // it's doesn't show anything (Map isn't iterable)
}
