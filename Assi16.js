const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})
function average(){
readline.question("enter first number:",(x)=>{
    readline.question("enter the second number:",(y)=>{
        const num1=parseInt(x);
        const num2=parseInt(y);
        let avg;
        avg=(num1+num2)/2;
        console.log("the average is "+avg);

    })
})
}
average();
