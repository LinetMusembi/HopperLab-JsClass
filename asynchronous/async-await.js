function greet(){;
    console.log("Welcome to our site");
};

let data = [{}];
let creatUser = new Promise ((resolve,reject)=>{;
    if(data){
        setTimeout(()=>{resolve("User successfully created")},5000)
      
    }
    else{
        setTimeout(()=>{ reject("User already exists")})
    };

});

async function creatUserAccount(){
    let response = await creatUser
    console.log({response});
}

creatUserAccount() 