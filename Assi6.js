const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})
readline.question("enter a number:", (num)=>{
    const number=parseInt(num);
    if(num>0){
        console.log("the number is positive");
    }
    else if(num==0){
        console.log("the number is zero");
    }
    else{
        console.log("the number is negative");
    }
    readline.close();

})




