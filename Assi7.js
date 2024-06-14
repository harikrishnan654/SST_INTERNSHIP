const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})
readline.question("enter a number:",(num)=>{
    if(num%2==0){
    
    console.log("the number is even");
    }
    else{
        console.log("the number is odd")
    }
    readline.close();
})