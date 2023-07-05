function talk(statement,callback){
    console.log(statement);
    callback();
};
function greet(){
    console.log("Hello There");
}
talk("I loved the coronation",greet)
