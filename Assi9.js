const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})
readline.question("enter the number:",(num)=>{
    const number=parseInt(num);
    if (num%5==0){
        console.log("the number is divisible by five");
        
    }
})