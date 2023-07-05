let num = [3,6,8,25,7,5,7]
console.log(num.length);

let multiples = num.map(item=>item*2);
console.log(multiples);


let triples = []
num.forEach(item=>{
    triples.push(item*2)
});   
console.log({triples});

let less = num.filter(item=>item<10);
console.log({less});

let getSeven = num.find(item=>item ===7);
console.log({getSeven});

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function checkEven(number) {
  if (number % 3 == 0)
    return number;
}
let evenNumbers = numbers.filter(checkEven);
console.log(evenNumbers); 




