const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question("enter the first number:\n",(a) => {
 readline.question("enter the second number:\n", (b) => {
    const num1 = parseFloat(a);
    const num2 = parseFloat(b);
    console.log("initial numbers: num1 =",num1,"num2 =",num2);

   console.log("logical oprators:");
   console.log("num1 && num2:",num1 && num2);
   console.log("num1 || num2:",num1 || num2);
   console.log("num1 ! num2:",!num1);
   readline.close();
  })
})