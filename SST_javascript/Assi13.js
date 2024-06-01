const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})
readline.question("enter the range:",(range)=>{
    const num=parseInt(range);
    for(var sum=1;sum<=range;sum++){
        if(sum%2==0){
            console.log (sum);

        }
    }
    readline.close();
})