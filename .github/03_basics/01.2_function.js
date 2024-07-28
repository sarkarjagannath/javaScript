//passing objects in function
const obj1={
    name:"jagannath",
    age:"22"
}

const arr=["js","22",true]
function obj(parameter){
    if(parameter){
        console.log(parameter.name);
        return
    }
    return
}

function arrays(parameter){
    console.log(parameter[1]);
}

arrays(arr)

obj(obj1)
obj()
obj({
    title:"chai aur code"
})