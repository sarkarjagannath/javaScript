function A(){
    const name="Jagannath"
    const age=22

    function B(){
        const name2="Sarkar"
        console.log(name)
    }
    // console.log(name2); can't be accessed outside of the B

    B()
    console.log(age)
}

A()

hi()
function hi(){
    console.log("hi")
}

/* bye() it's an error we need to access it after the function 
          cause it's store into a variable */

const bye = function(){
    console.log("bye")
}

bye()