function loggin(userName){
    return `${userName} just loggin succesfully`
}

// const result=loggin("jagannath")
// console.log(result)

console.log(loggin("jagannath"))

function sumOfunlimitedNumbers(...b){
    // console.log(b); here b treated as a array
    sum=0;
    for(let i=0;i<b.length;i++){
        sum+=b[i];
    }

    return sum;
}

console.log(sumOfunlimitedNumbers(3,4,5,100));