let student = {
    name:"Lynet",
    age:19,
    introduce:function(){
        console.log("Hello");
        console.log(`Hello my name is ${this.name}`)
    }
}
student.introduce();
student.hobby=function(){
    console.log("I love swimming")
}
console.log({student});
student.hobby();

delete student.age;
console.log({student})
console.log(student.introduce());