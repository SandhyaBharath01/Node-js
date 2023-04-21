function delay(time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Done");
        } , 1000);
    });
}
async function resolve()
{
    console.log("a");
    console.log("b");
    await delay(2000);
    console.log("c");
    await delay(3000);
    console.log("d");
    await delay(1000);
    console.log("e");
   
}
resolve();
