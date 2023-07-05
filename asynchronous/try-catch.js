let success=true
const performTask=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            success?resolve():reject()},2000)
    })
}
const successful=async ()=>{
    try{
      await  performTask();
        console.log("Task successful");
    }
    catch{
        throw new Error("Task failed")
    }
}
successful();



