const num = 10;
const num2 = 30;
console.log(num + num2);
console.log(num - num2);
console.log(num * num2);
console.log(num % num2);
console.log(num / num2);
let a = 4; 
a++;
console.log(a);
a--;
console.log(a);
let x = 5;
x+=1;
console.log(x);
console.log(num >= num2);
let age = 10;
let age2 = "10";
console.log("loosely equal",age == age2);
console.log("loosely not equal",age != age2);
console.log("strictly equal",age === age2);
console.log("strictly not equal",age !== age2);
if(age == age2 && num>=num2){
    console.log("and",true);
}
else{
    console.log("and false",false);
}

let number = 1;
let numbers = ++number;
console.log(numbers);

let rating = 3;
if(rating === 5){
    console.log("you are a winner");
}
else {
    console.log("you just lost")

}
let schoolName = "AkiraChix";
console.log(schoolName.slice(0,4));
console.log(schoolName.slice(4))
console.log(schoolName.length)
console.log(schoolName.substring(3,5));
console.log(schoolName.substr(3,5))

console.log(schoolName.replace ("i","o"));
console.log(schoolName.toUpperCase());
console.log(schoolName.toLowerCase())

const name = "Linet";
const name2 = "Musembi"
const newName = name.concat(name2)
console.log(newName)

let hobby = "     reading python";
console.log(hobby.trim());

console.log(schoolName.charAt(1));

