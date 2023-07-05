let people = [
    {name:"Lynet",age:20,height:"73ft"},
    {name:"Henry",age:30,height:"7ft"},
    {name:"susan",age:30,height:"7ft"},


];
let ages = people.map(item=>item.age);
console.log({ages});

let weight = people.map(item=>{
    return{
        ...item,
        weight:80
    }
})
console.log({weight});


let changedWeight = weight.map(item=>{
    if(item.name === "Ann"){
        item.weight=60;
    }
    return item
})
console.log({changedWeight});