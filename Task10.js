const readline = require("readline").createInterface({
input: process.stdin,
output: process.stdout,
});
readline.question("enter the first number\n",(a) => {
    readline.question("enter the second number\n",(b) => {
        //convert the input strings to numbers and calculate the sum
        const sum = parseInt(a) + parseInt(b);
         //convert the input strings to numbers and calculate the diff
         var diff = a-b;
         //convert the input strings to numbers and calculate the mul
         var mul = a*b;
         //convert the input strings to numbers and calculate the div
         var div = a/b;
        console.log("the sum is "+sum);
        console.log("the difference is "+diff);
        console.log("the multiplication is "+mul);
        console.log("the divsion is "+div);
        readline.close();
    
     });
});