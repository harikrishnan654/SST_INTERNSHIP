const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})
readline.question("enter the number:",(num)=>{
    let result = 0;
    n=parseInt(num);
    while (n>0){
        result +=n%10;
        n=parseInt(n/10);
    }
    console.log("sum:"+result);
    readline.close();
})