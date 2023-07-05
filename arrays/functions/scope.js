// Global variable
let a = 20;
function add(b){
    console.log(a+b);  
    let fruits = "Apple" //local variable cannot be accessed outside the variable. 
    console.log(fruits)
}
add(50);