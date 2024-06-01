const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})
readline.question("enter the length of the triangle:",(l)=>{
    readline.question("enter the breadth of the triangle:",(b)=>{
        const number=parseInt(l,b);
        var area=(l*b)/2;
        console.log("the area of the triangle is:",+area);
        readline.close();
    })
})