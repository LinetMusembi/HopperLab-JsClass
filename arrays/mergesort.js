function divideArray(num){
    if(num.length<=1){ 
    return num;
}
let middle = Math.floor(num.length/2);
let left = num.slice(0,middle);
let right = num.slice(middle);
return sortedArray(divideArray(left),divideArray(right));
}
function sortedArray(left,right){
    let emptyArray = []
    while(left.length && right.length){
        if(left[0]<right[0]){
            emptyArray.push(left.shift());

        }
        else{
            emptyArray.push(right.shift())
        }
    }
    return [...emptyArray,...left,...right]
}
let num = [10,2,56,3,8,4,11];
console.log(divideArray(num));




// function divideNums(array){
//     if(array <=1){
//         return array
//     }
//     let middle = Math.floor(array.length/2);
//     let left = (array.slice(0,middle));
//     let right=(array.slice(middle));
//     return sortsArray(divideArray(left),divideArray(right))

// }
// function sortsArray(left,right){;
//     let emptyArray = [];
//     while(left.length && right.length){
//     if(left[0]<right[0]){
//     EmptyArray.push(left[0]);
//     }
//     else{
//         newArray.push(right[0]);
//     }
// }
// return[...EmptyArray,...left,...right];


// }
// let hopper = [-6,20,8,-2,4]
// console.log(divideNums(hopper))

// let x = [4,8,7,2,11,1,3]
// let target = 4

// function manyArrays(array){
//     if(array <= 1){
//         return array
//     }
//     let middle = Math.floor(array.length/2);
//     let left = (array.slice(0,middle));
//     let right =(array.slice(middle));
//     return divideArray(manyArray(left),manyArray(right))
// }
// function divideArray (left,right){;
//     let emptyArray = [];
//     while(left.length && right.length){
//         if(left[0]<right[0]){
//             emptyArray.push(left[0])
//         }
//         else{
//             emptyArray.push(right[0])
//         }
//     }
//     return{...emptyArray,...left,...right}
// }
// let numbers = [4,8,7,2,11,1,3]
// console.log(manyArrays(numbers))

function divide(array){
    if(array.length<=1){
        return array;
    }
let middle = Math.floor(array.length/2);
let left = array.slice(0,middle);
let right = array.slice(middle);
return sortedArray(divide(left),divide(right));

}
function sortedArray(left,right){ 
let emptyArray = [];
while(left.length && right.length){
    if(left[0]<right[0]){
        emptyArray.push(left.shift());
    }
else{
    emptyArray.push(right.shift());
}
return [...emptyArray,...left,...right];

}
}
let array = [4,8,7,2,11,1,3];
console.log(divide(array));

