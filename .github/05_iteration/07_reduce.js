const myNums=[1,2,3,4]

const mytotal = myNums.reduce(function(acc,curval){
    console.log(`acc:${acc}  and  currenValue:${curval}`);
    return (acc*curval);
},1) //0=>acc

//using arrow function

const mytotal2=myNums.reduce( (acc,curval)=>(acc+curval),0)
console.log(mytotal);
console.log(mytotal2);

const myCart=[
    {
        id:1,
        price:200
    },
    {
        id:2,
        price:300
    },
    {
        id:3,
        price:400
    }
]

const totalPrice=myCart.reduce( (acc,curval)=>(acc+curval.price),0)
console.log(totalPrice);