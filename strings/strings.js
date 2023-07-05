let sentence = "I enjoy reading JavaScript"
console.log(sentence.length)
let a = 5;
let b = 4;
let c = a + b;
console.log(c);

let d = "linet" + " " + "musembi";
console.log(d);

let e , f;
e = 4 + 6;
f = e * 2;
console.log(e);
console.log(f);

let school = "AkiraChix";
carName = "Prado";
price = 400;
console.log(school);
console.log(carName);
console.log(price);
console.log(school,carName,price);

// I've provided you with two variables, die1 and die2 which represent six-sided dice. 
// Each variable holds a randomly generated integer from 1 to 6. 
// Please create a new variable called roll, which will be a string that displays each die as well as 
// their sum.  Follow this pattern:

// die1: 3

// die2: 5

// roll: "You rolled a 3 and a 5. They sum to 8"


let die1 = 3;
let die2 = 5;
let roll = `when you add ${die1} to ${die2} you will get ${die1 + die2}`;
console.log(roll);

const cars = ["saab","volvo","BMW"];
cars[0] = "toyota";
console.log(cars);
cars.push("Prado");
console.log(cars);

const car = {type:"Fiat",model:"500",color:"white"};
car.color = "red";
console.log(car);
car.owner = "linet";
console.log(car);

let x = 3;
let y = 2;
let z = x + y;
console.log(z);

let g = 3;
let h = (100 + 50) * g;
console.log(h);

let i = 10;
i += 5;
console.log(i);

let text = "a";
let text1 = "b";
let result = text < text1;
console.log(result);

let text2 = "20";
let text3 = "5";
let results = text2 < text3;
console.log(results);

// String concutination
let text4 = "What a very";
let text5 = "nice day";
let text6 = text4 + " " + text5;
console.log(text6);

let k = 5;
 k++;
console.log(k);

let l = 9;
l--;
console.log(l);

let m = 5;
let n = m ** 2;
console.log(n);

let o = myFunction(5,6);

function myFunction(a,b){
    return a * b;

}
console.log(o);

let p = numbers(45,9);
function numbers(a,b){
    return a - b

}
console.log(p)

const person = {firstName:"Lynet",lastName:"Musembi",age:19,eyeColor:"Blue"};
console.log(person);

let text8 = "We are the so-called \"Vikings\"from the north.";
console.log(text8);

let sentence1 = "i love reading";
let sentence2 = sentence1.replace("love","hate");
console.log(sentence2);

// String search meethods
// string index of

let sentence3 = "i have a lovely sister";
console.log(sentence3.indexOf("lovely"));

// string lastIndexOf
let sentence4 = "I finished school last year.The name of my school was St.Alphonsa school"
console.log(sentence4.lastIndexOf(school));

// string search
console.log(sentence4.search("finished"));

// String match
let text9 = "She sells sea shells at the sea shores";
console.log(text9.match(/e/g).length);
// g for global search
let text10 = "My hobby is travelling across the world";
console.log(text10.match(/l/g).length);

// String includes
console.log(sentence4.includes("money"));

// String starts with
console.log(sentence4.startsWith("school"));

// Map method
const fruits = new Map();
fruits.set("apples",500);
console.log(fruits)
fruits.set("apples",200);
console.log(fruits);



















