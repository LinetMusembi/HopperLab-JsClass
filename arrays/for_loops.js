let num = [3,5,10,30,8,6];
for(let i=0; i<num.length;i++){
    console.log(i);
    console.log(num[i]);
}

for(let i=0; i<num.length;i++){
    console.log("option1",num[i]);
   if(i === 2){
    break;
   }
   console.log("option3",num[i]);
}

for(let i=0; i<num.length;i++){
   if(i === 2){
   continue;
   }
   console.log(num[i]);
}

let fruits = ["mangoes","apples","pears","kiwi","passion"];
for(let i=0;i<fruits.length;i++){
    if(i ===2){
        break;
    }
    console.log(fruits[i])

}

let games = ["netball","football","volleyball","tabble Tennis","athletes"];
for(let i=0;i<games.length;i++){
    if(i===2){
        continue;
    }
    console.log(games[i])
}

let array = [10,20,30,40,50];
for(let i=0;i<array.length;i++){
    console.log(i);
}