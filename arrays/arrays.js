let num = [24,true,"hello",38];
let num2 = new Array (24,true,"hello",38);
console.log(num);
console.log(num2);
num.push("fruits");
// push adds elements at the end of an array
console.log(num);
num.unshift(3);
console.log(num);

num.pop();
console.log(num);

num.shift();
console.log(num);

// given an array of numbers x return an array even where every item in x is multiplied by 5
// let x = [5,8,2,87,33,67];
// let even = x.map(function(item){
//     return item * 5
// })
// console.log(even);
// let result = [];
// x.forEach(function(item){
//     result.push(item * 5)
// } )

console.log(result);
let newArray = num.concat(x);
console.log(newArray);
let tests = ["Anjella",...x, ...num];
console.log(tests);
let [a,b, ...c]= x;
console.log({a});
console.log({b});
console.log({c});
    
const array1 = ["a","b","c"];
const array2 = ["d","e","f"];
const array3 = array1.concat(array2);
console.log(array3);

// const words = ["spray","limit","elite","exuberant","destruction","present"];
// filter(word=>word.length)



// Array methods
// Map--- returns a new array
// Filter--- filters the value that pass the condition
// ForEach--- looping
// reduce----

// NB//Map---takes in a function as a parameter.
let arrs = [10,20,30,50,70]
const newArray1 =arrs.map(function(element){
    return element * 4
})
console.log(newArray1)

// arrowfunction

let arr1 = [2,3,4,5,6,7]
const newArray2 =arr1.map(element=>element*4)
console.log(newArray2)

// given an array of numbers x return an array even where every item in x is multiplied by 5

let numbers = [2,3,4,5]



