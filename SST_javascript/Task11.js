const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})
readline.question("enter a number:\n", (input) => {
    let number = parseFloat(input);
    
    console.log("initial number:", number);
    console.log("number++:", number++);
    readline.close();

})