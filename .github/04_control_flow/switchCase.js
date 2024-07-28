const month=2
switch (month) {
    case 1:
        console.log(`Jan`);
        break;
    case 2:
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
const obj={};

if(!(Object.keys(obj).length)){
    console.log(`This is an empty object`);
}
