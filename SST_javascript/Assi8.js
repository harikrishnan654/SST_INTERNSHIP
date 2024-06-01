const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})
readline.question("enter the first number:",(a)=>{
    readline.question("enter the second number:",(b)=>{
        readline.question("enter the third number:",(c)=>{
            const number= parseInt(a,b,c);
            if(a>b && a>c){
                console.log("the largest number is",+a);

            }
            else if(b>a &&b >c){
                console.log("the largest number is ",+b);

         }
         else{
            console.log("the number is",+c);
         }
         readline.close();
         
        })
    })
})