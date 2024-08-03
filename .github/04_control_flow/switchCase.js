const month="f"
switch (month) {
    case "1":
        console.log(`Jan`);
        break;
    case "f":
        console.log(`Feb`);
        break;
    case 3:
        console.log(`Mar`);
        break;

    default:
        console.log(`Enter a valid month`);
        break;
}


//falsy values: false,0,-0,"",null,undefined,NaN
//turthy values:[] (empty array)

// check for array and object in if statements
const obj={"a":"ad",
    "b":"c"
};

console.log(Object.values(obj).length);
// if(!(Object.keys(obj).length)){
//     console.log(`This is an empty object`);
// }
