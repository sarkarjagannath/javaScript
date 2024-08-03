// *****************************  Object D structure ****************
const course={
    name:"MERN - STACK",
    price:"999",
    courseInstructor:"Jagannath"

}

const {courseInstructor:teacher}=course

const {price:p}=course


console.log(teacher,p)
console.table([teacher,p])