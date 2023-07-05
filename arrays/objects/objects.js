let person = {
    name:"Lynet",
    age:19,
    height:"5ft3Inch",
    friend:{
        name:"Irene",
        age:20
    }
}
let student = new Object();

student.name = "Mary"//adding a property.
console.log(person.age);//log a value.
console.log(person["name"]);
// dot notation is also used to add a new property.
console.log(person.friend.name);
console.log({student});

person.age = 27;
console.log({person})

person.school= "AkiraChix";
console.log({person})

let person2 = Object.assign(person);//cloning an object.
console.log({person});

let keys = Object.keys(person);
console.log({keys})

let values = Object.values(person);
console.log({values});