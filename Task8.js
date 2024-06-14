const r1 =require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.question("who are you?\n",(name) => {
    r1.question("where are you?\n",(place) =>{
    console.log("Hey there " + name + "!");
    console.log("oh!"+place+"!");
    r1.close();

});
});

