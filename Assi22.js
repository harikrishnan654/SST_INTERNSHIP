const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})
readline.question("enter your date birth:",(a)=>{
    const num=parseInt
    const today=new Date()
    var age=today.getFullYear()-a;
    console.log(age);
})
