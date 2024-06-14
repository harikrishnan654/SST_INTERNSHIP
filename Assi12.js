const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})
readline.question("enter the celcius value:",(cel)=>{


const temp=parseInt(cel);
fah=cel*9/5+32;
console.log("the fahrenheit value is:",+fah);
readline.close();
})